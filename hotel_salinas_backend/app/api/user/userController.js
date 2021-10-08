const express = require('express');
const pool = require('./../../db/postgres');
const logger = require('./../../utils/logger');
const router = express.Router();
//const { adminGuard } = require('../auth/aclService');
const UserService = require('./userService');
//const CustomErrorService = require('../../../utils/customErrorService');

const userService = new UserService();

router.get('/', (req, res) => {
  userService
    .findAll()
    .then(users => res.send(users));
});

/*
router.post('/add',async (req, res) => {
    userService
      .addUser(req.body)
      .then(user => res.send(user))
      .catch(err => res.status(400).send({ error: err.message }));
  });
*/




router.post('/app/add', async (req, res) => {
  //SELECT * FROM website_rooms

  var email = req.body.email;
  var password = req.body.password;
  var username = req.body.username;


  const client = await pool.connect();
  var transaction_success = false;
  var isDuplicate = false;
  insertedRows = 0;

  try {
    await client.query('BEGIN')
    const insert_client_query = 'INSERT INTO client_users (username, email, password, createon,createdby,updateon,updatedby) VALUES ($1, $2, $3, now(),1,now(),1) RETURNING user_id';
    const res = await client.query(insert_client_query, [username, email, password]);
    console.log(res);
  
    const insert_profile_query = 'INSERT INTO client_profile (user_id,gender, createon,createdby,updateon,updatedby) VALUES ($1, $2,now(),1,now(),1)'
    const insert_profile_values = [res.rows[0].user_id, 1];



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
    /*
    if (e['code'] != undefined || e['code'] != null) {
      if (e['code'] == "23505") {
        isDuplicate = true;
      }
      logger.error(e);
    } else {
      logger.error(e);
    }
    */

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
