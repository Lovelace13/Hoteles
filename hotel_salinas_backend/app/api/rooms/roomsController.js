const express = require('express');
const pool = require('./../../db/postgres');
const logger = require('./../../utils/logger');
const router = express.Router();
//const { adminGuard } = require('../auth/aclService');
//const UserService = require('./userService');
//const CustomErrorService = require('../../../utils/customErrorService');

//const userService = new UserService();


//READ
router.get('/', (req, res) => {

  const rooms_query = `select room_id,wrt.room_type_id,wrt.type_title,room_number,name,path_image1,path_image2,path_image3,path_image4,path_image5,score,availability from website_rooms wr
  inner join website_room_type wrt on wr.room_type_id = wrt.room_type_id
  where wr.isactive=true`;
  pool.query(rooms_query)
    .then(rooms => {
      if (rooms.rows.length > 0) {
        var output = rooms.rows;
        res.send(output);
      } else {
        var output = {
          status: 0
        };
        return output;
      }
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw error
    });
  });

  //CREATE
router.post('/add', (req, res) => {

    let room_type_id = req.body.room_type_id;
    let availability = req.body.availability;
    let name = req.body.name;
    
    let room_number = req.body.room_number;
    let score = req.body.score;
    
    let path_image1 = req.body.path_image1;
    let path_image2 = req.body.path_image2;
    let path_image3 = req.body.path_image3;
    let path_image4 = req.body.path_image4;
    let path_image5 = req.body.path_image5;

  const room_types_insert_query = `INSERT INTO website_rooms ( room_type_id,availability,name,room_number,score,path_image1,path_image2,path_image3,path_image4,path_image5,createon,createdby,updateon,updatedby)
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,now(),1,now(),1) RETURNING room_id `;
  pool.query(room_types_insert_query,[room_type_id,availability,name,room_number,score,path_image1,path_image2,path_image3,path_image4,path_image5])
    .then(room => {
      let rows_inserted = room.rowCount;
      if(rows_inserted != undefined && rows_inserted > 0){
        console.log("habitacion creada con exito");
          res.send({
              status:1,
              inserted: room.rowCount,
              rowId: room.rows[0].room_id
          });
      }else{
          res.send({
              status:0,
              inserted: room.rowCount
          });
      }

    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw error
    });
});


  //UPDATE
  router.post('/update', (req, res) => {

    let room_id = req.body.room_id;
    let room_type_id = req.body.room_type_id;
    let availability = req.body.availability;
    let name = req.body.name;
    
    let room_number = req.body.room_number;
    let score = req.body.score;
    
    let path_image1 = req.body.path_image1;
    let path_image2 = req.body.path_image2;
    let path_image3 = req.body.path_image3;
    let path_image4 = req.body.path_image4;
    let path_image5 = req.body.path_image5;

    console.log(req.body);
    
    const room_types_update_query = `UPDATE website_rooms SET room_type_id=$1,availability=$2,name=$3,room_number=$4,score=$5,path_image1=$6,path_image2=$7,path_image3=$8,path_image4=$9,path_image5=$10 where room_id=$11`;
    pool.query(room_types_update_query,[room_type_id,availability,name,room_number,score,path_image1,path_image2,path_image3,path_image4,path_image5,room_id])
      .then(roomUpdate => {
        let rows_inserted = roomUpdate.rowCount;
        if(rows_inserted != undefined && rows_inserted > 0){
          console.log({
            status:1,
            updated: roomUpdate.rowCount
        });
            res.send({
                status:1,
                updated: roomUpdate.rowCount
            });
        }else{
          console.log({
            status:0,
            updated: roomUpdate.rowCount
        });
            res.send({
                status:0,
                updated: roomUpdate.rowCount
            });
        }
        
      })
      .catch(err => {
        console.error('Error executing query', err.stack);
        throw error
      });
  });

  //DELETE
  router.post('/delete', (req, res) => {

    let rowid = req.body.room_id;
    console.log(rowid);
    
    const room_types_delete_query = `DELETE FROM website_rooms WHERE room_id = $1`;
    pool.query(room_types_delete_query,[rowid])
      .then(roomTypes => {
        let rows_inserted = roomTypes.rowCount;
        if(rows_inserted != undefined && rows_inserted > 0){
            res.send({
                status:1,
                deleted: roomTypes.rowCount
            });
        }else{
            res.send({
                status:0,
                deleted: roomTypes.rowCount
            });
        }
        
      })
      .catch(err => {
        console.error('Error executing query', err.stack);
        throw error
      });
  });














/*
**************** ROOM TYPES ********************
*/



//READ
router.get('/types', (req, res) => {

    const room_types_query = 'select room_type_id as room_id,type_title as title,type_description as description,price,beds,max_adults,max_children from website_room_type where isactive = $1';
    pool.query(room_types_query,['Y'])
      .then(roomTypes => {
        if (roomTypes.rows.length > 0) {
          var types = roomTypes.rows;
          res.send(types);
        } else {
          var output = {
            status: 0
          };
          return output;
        }
      })
      .catch(err => {
        console.error('Error executing query', err.stack);
        throw error
      });
    });

//READ
router.get('/types/list', (req, res) => {
  const room_types_query = 'select room_type_id,type_title as title from website_room_type where isactive = $1';
  pool.query(room_types_query,['Y'])
    .then(roomTypes => {
      if (roomTypes.rows.length > 0) {
        var types = roomTypes.rows;
        res.send(types);
      } else {
        var output = {
          status: 0
        };
        return output;
      }
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw error
    });
  });
//CREATE
router.post('/types/add', (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let beds = req.body.beds;
    let max_adults = req.body.max_adults;
    let max_children = req.body.max_children;

    const room_types_insert_query = `INSERT INTO website_room_type ( type_title,type_description,price,beds,max_adults,max_children, createon,createdby,updateon,updatedby)
    VALUES ($1,$2,$3,$4,$5,$6,now(),1,now(),1) RETURNING room_type_id `;
    pool.query(room_types_insert_query,[title,description,price,beds,max_adults,max_children])
      .then(roomTypes => {
        let rows_inserted = roomTypes.rowCount;
        if(rows_inserted != undefined && rows_inserted > 0){
            res.send({
                status:1,
                inserted: roomTypes.rowCount,
                rowId: roomTypes.rows[0].room_type_id
            });
        }else{
            res.send({
                status:0,
                inserted: roomTypes.rowCount
            });
        }

      })
      .catch(err => {
        console.error('Error executing query', err.stack);
        throw error
      });
  });
  //UPDATE
  router.post('/types/update', (req, res) => {

    let rowid = req.body.rowid;
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let beds = req.body.beds;
    let max_adults = req.body.max_adults;
    let max_children = req.body.max_children;
    
    const room_types_update_query = `UPDATE website_room_type SET type_title=$1,type_description=$2,max_adults=$3,max_children=$4,price=$5,beds=$6 where room_type_id= $7 `;
    pool.query(room_types_update_query,[title,description,max_adults,max_children,price,beds,rowid])
      .then(roomTypes => {
        let rows_inserted = roomTypes.rowCount;
        if(rows_inserted != undefined && rows_inserted > 0){
            res.send({
                status:1,
                updated: roomTypes.rowCount
            });
        }else{
            res.send({
                status:0,
                updated: roomTypes.rowCount
            });
        }
        
      })
      .catch(err => {
        console.error('Error executing query', err.stack);
        throw error
      });
  });


  //DELETE
  router.post('/types/delete', (req, res) => {

    let rowid = req.body.rowid;
    
    const room_types_delete_query = `DELETE FROM website_room_type WHERE room_type_id = $1`;
    pool.query(room_types_delete_query,[rowid])
      .then(roomTypes => {
        let rows_inserted = roomTypes.rowCount;
        if(rows_inserted != undefined && rows_inserted > 0){
            res.send({
                status:1,
                deleted: roomTypes.rowCount
            });
        }else{
            res.send({
                status:0,
                deleted: roomTypes.rowCount
            });
        }
        
      })
      .catch(err => {
        console.error('Error executing query', err.stack);
        throw error
      });
  });

/*
router.post('/web/add', async (req, res) => {
  //SELECT * FROM website_rooms

  var email = req.body.email;
  var password = req.body.password;
  var username = req.body.username;

  let avatar = req.body.avatar;
  var firstName = req.body.firstName;
  var lastname = req.body.lastname;
  var title = req.body.title;
  var gender = req.body.gender;
  var phone = req.body.phone;


  if (gender == 'M') {
    gender = 1
  } else if (gender == 'F') {
    gender = 2
  } else {
    gender = 3
  }
  var document_type = req.body.document_type;
  if (document_type == 'CE') {
    document_type = 1
  } else if (document_type == 'PAS') {
    document_type = 2
  } else {
    document_type = 3
  }
  var document_number = req.body.document_number;
  var datebirth = req.body.datebirth;


  const client = await pool.connect();
  var transaction_success = false;
  var isDuplicate = false;
  insertedRows = 0;

  console.log(document_type);
  try {
    await client.query('BEGIN')
    const insert_client_query = 'INSERT INTO client_users (username, email, password, createon,createdby,updateon,updatedby) VALUES ($1, $2, $3, now(),1,now(),1) RETURNING user_id';
    const res = await client.query(insert_client_query, [username, email, password]);
    console.log(res);
  
    const insert_profile_query = 'INSERT INTO client_profile (avatar,user_id, document_type, document_number,gender,name,last_name,phone,date_birth,billing_title, createon,createdby,updateon,updatedby) VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,now(),1,now(),1)'
    const insert_profile_values = [avatar,res.rows[0].user_id, document_type, document_number, gender, firstName, lastname, phone, datebirth, title];



    const res2 = await client.query(insert_profile_query, insert_profile_values);
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

});

router.post('/web/delete', async (req, res) => {
  //SELECT * FROM website_rooms

  var email = req.body.email;
  console.log(email);
  const client = await pool.connect();
  var transaction_success = false;
  
  try {
    await client.query('BEGIN')
    //const delete_client_query = 'INSERT INTO client_users (username, email, password, createon,createdby,updateon,updatedby) VALUES ($1, $2, $3, now(),1,now(),1) RETURNING user_id';
    const delete_client_query = 'DELETE FROM client_profile WHERE user_id IN (SELECT user_id FROM client_users where email = $1)';
    const res = await client.query(delete_client_query, [email]);
    console.log(res);
  
    //const insert_profile_query = 'INSERT INTO client_profile (user_id, document_type, document_number,gender,name,last_name,phone,date_birth,billing_title, createon,createdby,updateon,updatedby) VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9,now(),1,now(),1)'
    //const insert_profile_values = [res.rows[0].user_id, document_type, document_number, gender, firstName, lastname, phone, datebirth, title];
    const delete_profile_query = 'DELETE FROM client_users where email = $1';

    const res2 = await client.query(delete_profile_query, [email]);
    console.log(res2);
    await client.query('COMMIT');
    deletedRows = res2['rowCount'];
    transaction_success = true;
  } catch (e) {
    console.log(e);
    transaction_success = false;
    await client.query('ROLLBACK');

} finally {
    client.release()
  }

  if (transaction_success) {
    res.send({
      status: 1,
      deletedRows:deletedRows
    });
  }
  else {
    res.send({
      status: 0,
      deletedRows:deletedRows
    });
  }

});
*/





/*


router.get('/current', (req, res) => {
  userService
    .findById(req.user.id)
    .then(user => res.send(user));
});

router.put('/current', (req, res) => {
  userService
    .editCurrentUser(req.body, req.user.id)
    .then(user => res.send(user))
    .catch(error => {
      if (error instanceof CustomErrorService) {
        res.status(error.metadata && error.metadata.error.code)
          .send(error);
      }
    });
});

router.get('/:id', adminGuard, (req, res) => {
  userService
    .findById(req.params.id)
    .then(user => res.send(user));
});

router.put('/:id', adminGuard, (req, res) => {
  userService
    .editUser(req.body, req.params.id)
    .then(user => res.send(user))
    .catch(error => {
      if (error instanceof CustomErrorService) {
        res.status(error.metadata && error.metadata.error.code)
          .send(error);
      }
    });
});

router.delete('/:id', adminGuard, (req, res) => {
  userService
    .deleteUser(req.params.id)
    .then(() => res.send({ id: req.params.id }));
});
*/

module.exports = router;
