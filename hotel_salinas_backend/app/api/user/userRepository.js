const pool = require('../../db/postgres');

class UserRepository {

  findById(id) {
    return this.dbClient
      .then(db => db
        .collection(this.collection)
        .aggregate([
          { $match: { _id: ObjectID(id) } },
          {
            $lookup: {
              from: 'settings',
              localField: '_id',
              foreignField: '_id',
              as: 'settings',
            },
          },
          { $limit: 1 },
        ])
        .toArray())
      .then(data => (data && data.length ? data[0] : data));
  }

  findAll() {

    var email_query = `select cu.user_id,cp.avatar as img,cu.username,cp.name as name ,cp.last_name as last_name,cu.email as email,cp.billing_title,wgt.code as sex,cp.date_birth as birth_date ,wdt.code as document_type,cp.document_number,cp.phone AS mobile from client_users cu
          inner join client_profile cp on cu.user_id=cp.user_id
          left join website_gender_type wgt on cp.gender = wgt.gender_id
          left join website_doc_type wdt on cp.document_type = wdt.doc_id
        where cu.isactive=true and cp.isactive = true`;
    return pool.query(email_query)
      .then(res => {
        if (res.rows.length > 0) {

          var user = res.rows;

          var output = user;
          output['status'] = 1;
          console.log(output);
          return output;
        } else {
          var output = {
            status: 0
          };
          return output;
        }
      })
      .catch(err => {
        console.error('Error executing query', err.stack)
        throw error
      });
  }

  async addWeb(user) {
    console.log(user);

    var firstName = user.firstName;
    var lastname = user.lastname;
    var username = user.username;
    var avatar = user.avatar;
    if(avatar == undefined){
      avatar = '';
    }
    var email = user.email;
    var password = user.password;
    
    var title = user.title;
    var gender = user.gender;
    var datebirth = user.datebirth;

    const client = await pool.connect();
    var transaction_success = false;
    var isDuplicate = false;
    insertedRows = 0;

    console.log(email);
    console.log(password);
    console.log(username);
    console.log(firstName);
    console.log(lastname);
    console.log(title);
    console.log(gender);
    console.log(datebirth);
    try {
      await client.query('BEGIN')
      const insert_client_query = 'INSERT INTO client_users (username, email, password, createon,createdby,updateon,updatedby) VALUES ($1, $2, $3, now(),1,now(),1) RETURNING user_id';
      const res = await client.query(insert_client_query, [username, email, password]);
      console.log(res);

      const insert_profile_query = 'INSERT INTO client_profile (avatar,user_id, document_type, document_number,gender,name,last_name,phone,date_birth,billing_title, createon,createdby,updateon,updatedby) VALUES ($1,$2, null,null, $3, $4,$5,null,$6,$7,now(),1,now(),1)'
      const insert_profile_values = [avatar,res.rows[0].user_id, gender, firstName, lastname, datebirth, title];
      const res2 = await client.query(insert_profile_query, insert_profile_values);
      console.log(res2);
      await client.query('COMMIT');
      insertedRows = res2['rowCount'];
      transaction_success = true;
    } catch (e) {
      transaction_success = false;
      await client.query('ROLLBACK');
      if (e['code'] != undefined || e['code'] != null) {
        if (e['code'] == "23505") {
          isDuplicate = true;
        }
        logger.error(e);
      } else {
        logger.error(e);
      }

    } finally {
      client.release()
    }

    if (transaction_success) {
      res.send({
        status: 1,
        isDuplicate: false,
        rowsInserted: insertedRows

      });
    }
    else {
      res.send({
        status: 0,
        isDuplicate: isDuplicate
      });
    }

  }

  findByEmail(email) {

    var email_query = `select cp.user_id AS id, cu.password, cu.email ,cp.name as name ,cp.last_name as last_name,cp.billing_title,wgt.name as gender,cp.date_birth ,wdt.name as document_type,cp.document_number from client_users cu
        inner join client_profile cp on cu.user_id=cp.user_id
        left join website_gender_type wgt on cp.gender = wgt.gender_id
        left join website_doc_type wdt on cp.document_type = wdt.doc_id
      where cu.isactive=true and cp.isactive = true and cu.email=$1`;
    return pool.query(email_query, [email])
      .then(res => {
        if (res.rows.length > 0) {

          var user = res.rows[0];

          var output = user;
          output['status'] = 1;
          console.log(output);
          return output;
        } else {
          var output = {
            status: 0
          };
          return output;
        }
      })
      .catch(err => {
        console.error('Error executing query', err.stack)
        throw error
      });

    /*
    return this.dbClient
            .then(db => db
                .collection(this.collection)
                .findOne({ email }));
    */

  }

  /*
  findAllUsersByEmail(email) {
    return this.dbClient
      .then(db => db
        .collection(this.collection)
        .find({ email })
        .toArray());
  }
 
  changePassword(id, salt, passwordHash) {
    return this.dbClient
      .then(db => db
        .collection(this.collection)
        .updateOne({ _id: ObjectID(id) }, { $set: { salt, passwordHash } }));
  }
 
  listFiltered(filter) {
    const listFilter = this._getListFilter(filter);
 
    return super.listFiltered(listFilter);
  }
 
  getCountFiltered(filter) {
    const listFilter = this._getListFilter(filter);
 
    return super.getCountFiltered(listFilter);
  }
 
  _getListFilter(filter) {
    const copyFilter = { ...filter };
 
    copyFilter.query = {};
 
    // names here are not fully consistent with naming convention for compatibility with ng2-smart-table api on UI
    if (copyFilter.filterByfirstName) {
      copyFilter.query.firstName = { $regex: copyFilter.filterByfirstName, $options: '-i' };
    }
    if (copyFilter.filterBylastName) {
      copyFilter.query.lastName = { $regex: copyFilter.filterBylastName, $options: '-i' };
    }
    if (copyFilter.filterBylogin) {
      copyFilter.query.fullName = { $regex: copyFilter.filterBylogin, $options: '-i' };
    }
    if (copyFilter.filterByemail) {
      copyFilter.query.email = { $regex: copyFilter.filterByemail, $options: '-i' };
    }
    if (copyFilter.filterByage) {
      copyFilter.query.age = copyFilter.filterByage;
    }
    if (copyFilter.filterBystreet) {
      copyFilter.query['address.street'] = { $regex: copyFilter.filterBystreet, $options: '-i' };
    }
    if (copyFilter.filterBycity) {
      copyFilter.query['address.city'] = { $regex: copyFilter.filterBycity, $options: '-i' };
    }
    if (copyFilter.filterByzipcode) {
      copyFilter.query['address.zipCode'] = { $regex: copyFilter.filterByzipcode, $options: '-i' };
    }
 
    return copyFilter;
  }
 
  // TODO: implement photo return
  getPhoto(userId) {
    const defaultFileName = 'default-img.jpg';
 
    return Promise.resolve(defaultFileName);
    // return this.dbClient
    //   .then(db => db
    //     .collection(this.collection)
    //   )
  }
  */
}

module.exports = UserRepository;
