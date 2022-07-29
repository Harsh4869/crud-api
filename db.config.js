
const mongoose = require('mongoose')
const URL = 'mongodb://localhost:27017/harsh'

// const mqtt = require('mqtt');
const con = mongoose.connection
// const client = mqtt.connect('mqtt://localhost:1800') 
con.on('open', () => {
    console.log('connected with mongodb')
})

