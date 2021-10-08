const express = require('express');
const bodyParser = require("body-parser");
const pool = require('./db/postgres');
const logger = require('./utils/logger');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.get('/test',(req,res) => {
        //SELECT * FROM website_rooms
        pool.query('SELECT * FROM website_rooms', (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          });
});

app.get('/info/types/document',(req,res) => {
    //SELECT * FROM website_rooms
    pool.query('select name,code from website_doc_type where isactive=true', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      });
});

app.get('/hotel/rooms',(req,res) => {
    //SELECT * FROM website_rooms
    pool.query('select room_id,name,room_number,description,path_image,score,price,isavailable,max_beds,max_adults,max_children,createon,updateon from website_rooms where isactive=true', (error, results) => {
        if (error) {
          logger.error(error);
          res.status(200).json({status:0});
        }
        console.log(results.rows);
        res.status(200).json({status:1,
        data: results.rows});
      });
});

app.get('/info/types/gender',(req,res) => {
    //SELECT * FROM website_rooms
    pool.query('select name,code from website_gender_type where isactive=true', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      });
});

app.post('/auth/exist/email',(req,res) => {
    //SELECT * FROM website_rooms
    console.log(email);
    var email = req.body.email;
    pool.query('select username, email from client_users where email = $1 and isactive=true',[email], (error, results) => {
        if (error) {
          throw error
        }
        console.log(results.rows);
        if(results.rows.length > 0){
          res.status(200).json({
            status:1,
            data:results.rows[0]
          });
        }else{
          res.status(200).json({
            status:0
          });
        }
      });
});

app.post('/auth/search/cliente',(req,res) => {
  //SELECT * FROM website_rooms
  
  var email = req.body.email;
  pool.query(`select cp.user_id,cp.name as name ,cp.last_name as last_name,cp.billing_title,wgt.name as gender,cp.date_birth ,wdt.name as document_type,cp.document_number from client_users cu
  inner join client_profile cp on cu.user_id=cp.user_id
  left join website_gender_type wgt on cp.gender = wgt.gender_id
  left join website_doc_type wdt on cp.document_type = wdt.doc_id
where cu.isactive=true and cp.isactive = true and cu.email=$1`
  ,[email], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      if(results.rows.length > 0){
        res.status(200).json({
          status:1,
          data:results.rows[0]
        });
      }else{
        res.status(200).json({
          status:0
        });
      }
    });
});

app.post('/auth/login/cliente',(req,res) => {
  //SELECT * FROM website_rooms
  
  var email = req.body.email;
  pool.query(`select cu.email,cu.username,cu.password from client_users cu where cu.isactive=true and cu.email=$1`
  ,[email], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      if(results.rows.length > 0){
        res.status(200).json({
          status:1,
          data:results.rows[0]
        });
      }else{
        res.status(200).json({
          status:0
        });
      }
    });
});




app.post('/registrar/cliente',async (req,res) => {
  //SELECT * FROM website_rooms
  
  var email = req.body.email;
  var password = req.body.password;
  var username = req.body.username;

  var firstName = req.body.firstName;
  var lastname= req.body.lastname;
  var title= req.body.title;
  var gender= req.body.gender;
  
  var datebirth= req.body.datebirth;

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
    const res = await client.query(insert_client_query, [username,email,password]);
    const insert_profile_query = 'INSERT INTO client_profile (user_id, document_type, document_number,gender,name,last_name,phone,date_birth,billing_title, createon,createdby,updateon,updatedby) VALUES ($1, null,null, $2, $3,$4,null,$5,$6,now(),1,now(),1)'
    const insert_profile_values = [res.rows[0].user_id,gender,firstName,lastname,datebirth,title];
    const res2 = await client.query(insert_profile_query, insert_profile_values);
    await client.query('COMMIT');
    insertedRows = res2['rowCount'];
    transaction_success = true;
  } catch (e) {
    transaction_success = false;
    await client.query('ROLLBACK');
    if(e['code'] != undefined || e['code'] != null){
      if(e['code'] == "23505"){
        isDuplicate = true;
      }
      logger.error(e);
    }else{
      logger.error(e);
    }
    
  } finally {
    client.release()
  }

  if(transaction_success){
    res.send({
      status: 1,
      isDuplicate: false,
      rowsInserted: insertedRows

    });
  }
  else{
    res.send({
      status: 0,
      isDuplicate: isDuplicate
    });
  }
 
});
module.exports = app;