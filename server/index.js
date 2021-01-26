require('dotenv').config()
const express = require ('express')
const massive = require('massive')
const session = require('express-session')
const authctrl = require('./controllers/authController')
const authenticateUser = require('./middlewares/authenticateUser')

const {SERVER_PORT, DB_STRING, SESSION_SECRET} = process.env

const app = express();

// gives access to req.body middle ware
app.use(express.json());  

// this must be above end points
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 365
    }
}));

//EndPoints




// connect our server to our db
massive({
    connectionString: DB_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    console.log('DB connected');
    app.set('db', dbInstance)
})



app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))