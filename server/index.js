require('dotenv').config()
const express = require ('express')
const massive = require('massive')
const session = require('express-session')
const authctrl = require('./controllers/authControllers')
const productController = require ('./controllers/productController')
const duckController = require ('./controllers/duckController')
const gooseController = require ('./controllers/gooseController')
const blanksController = require ('./controllers/blanksController')
// const authenticateUsrser = require('./middlewares/authenticateUser')

const {SERVER_PORT, DATA_STRING, SESSION_SECRET} = process.env

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
// auth endpoints
app.post('/auth/register', authctrl.register);
app.post('/auth/login', authctrl.login);
app.get('/auth/user', authctrl.getUserSession);
app.delete('/auth/logout', authctrl.logout);
//EndPoints

app.get('/api/Products', productController.getAllProducts);
app.get('/api/DuckCalls', duckController.getAllDuckCalls);
app.get('/api/GooseCalls', gooseController.getAllGooseCalls);
app.get('/api/CallBlanks', blanksController.getAllBlanks);

// connect our server to our db
massive({
    connectionString: DATA_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    console.log('DB connected');
    app.set('db', dbInstance)
})



app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))