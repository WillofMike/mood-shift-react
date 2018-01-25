const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport')
const passportLocal = require('./config/passport')
const favicon = require('serve-favicon')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const AuthController = require('./controllers/auth.js');
const routes = require("./routes")
const port = process.env.PORT || 3000;

if (process.env.MONGODB_URI) mongoose.connect(process.env.MONGODB_URI)
else mongoose.connect('mongodb://localhost/mood_app')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// Passport Middleware
app.use(passport.initialize());
app.use('/', express.static('public'));

app.use((req, res, next) => {
  console.log('the req', req);
  next();
})

// Authentication
app.post('/auth/login', AuthController.processLogin);
app.post('/auth/signup', AuthController.processSignup);
app.get('/auth/login', AuthController.login);
app.get('/auth/logout', AuthController.logout);


// Ensure routes below are authenticated
// app.use(passportLocal.ensureAuthenticated);

routes(app)

app.listen(port, () => {
  console.log('listening on: ',  port);
})
