//const app = require('./app/app');
const debug  = require('debug')('node-angular');
const http = require('http');


const express = require('express');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const config = require('config');
const logger = require('./app/utils/logger');

require('dotenv/config');
require('./app/passport');


const authController = require('./app/api/auth/authController');
const userController = require('./app/api/user/userController');
const roomsController = require('./app/api/rooms/roomsController');
const activitiesController = require('./app/api/activities/activityController');

const app = express();
const { default_port, root } = config.get('api');

function logErrors(err, req, res, next) {
    logger.error(err);
    next(err);
  }

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something went wrong.' });
  } else {
    next(err);
  }
}


app.use(cors({origin: '*'}));
app.use(bodyParser.json());

const auth = passport.authenticate('jwt', { session: false });

app.use(`${root}/auth`, authController);
app.use(`${root}/users`, userController);
app.use(`${root}/rooms`, roomsController);
app.use(`${root}/activities`, activitiesController);



app.use(logErrors);
app.use(clientErrorHandler);

app.get('/', (req, res) => {
    res.send('ESTO ES UN MENSAJE DE PRUEBAS!');
  });






// CODE TO INIT SERVER

const normalizePort = val => {
    var port = parseInt(val,10);

    if (isNaN(port))
    {
        //named Pipe
        return val;
    }

    if(port >= 0){
        //port numbre
        return port;
    }

    return false;
}

const onError = error => {
    if(error.syscall !== "listen"){
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe" + addr: "port" + port;
    switch (error.code){
        case "EACCES":
            console.error(bind + " required elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + "Is already in use");
            process.exit(1);
            break;
        default: 
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;
    logger.info(bind);
    debug("Listening on " + bind);
}
//INICIALIZANDO SERVIDOR
if(app.get('env') === 'development'){
    //
    logger.info('Running in development Environment');
    
}
else{
    logger.info('Running in Production Environment');
    
}

const port = normalizePort(process.env.PORT || default_port);
app.set('port',port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening",onListening);
server.listen(port);