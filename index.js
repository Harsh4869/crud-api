const express = require('express')
const mongoose = require('mongoose')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const URL = 'mongodb://localhost:27017/harsh'
require("express-group-routes");
const app = express()
var bodyparser = require('body-parser')
const abc = require('./config/db.config')

mongoose.connect(URL, { UseNewUrlParser: true })

app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static('public/images'));

app.use(express.json())

const dkRouter = require('./routes/routes');
require('./routes/routes')(app)
 

app.listen(1000, () => {
    console.log('server connected')
}) 
