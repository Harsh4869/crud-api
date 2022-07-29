
const express = require('express')
var bcrypt = require('bcryptjs');
require('dotenv').config()
const uploadFile = require("../middleware/upload");
var User = require('../model/user')
// const route = express.Router()
// const http = require('http');
// const { log } = require('console');
// const io = require('socket.io')(http)
// const Joi = require('joi')
// const validator = require('express-joi-validation').createValidator({})
// const errorFunction = require("../utils/errorFunction");
// const securePassword = require("../utils/securePassword");

//MongoDB operations

exports.CreateUser = async function (req, res) {
    console.log(req.body);
    let {email,password,firstname,lastname}=req.body
    encryptedPassword = await bcrypt.hash(password, 10);
    let myobj = new User({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password: encryptedPassword

    })
    await myobj.save().then((data, err) => {

        // res.json(data)
        res.send({
            status: 1,
            message: "dssdds",
            data: data
        })
    })
};

exports.Alluserlist = async function (req, res) {
    console.log(req.body, "bhdcbuebuegycg");
    try {
        await user.find().then((data, err) => {
            console.log(data, "data");
            res.send(data)
        })
    }
    catch (err) {
        res.send('Error' + err)
    }
};

exports.UpdateUser = function (req, res) {
    let myobj = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,

    }
    user.findByIdAndUpdate(req.body.id, { $set: myobj }, function (err, product) {
        if (err) return next(err);
        res.status = 1
        res.message = "dssdds"
        res.send(product);
    })
 
    console.log("vcbvbvbv");
};

exports.DeleteUser = async function (req, res) {
    console.log(req.params.id, "junfn")
    try {
        user.findOne({ _id: req.params.id }).then((data, err) => {
            console.log(data, "sgygeyx");

            if (data) {
                user.deleteOne({ _id: data._id }).then((data1, err) => {
                    console.log(data1, "vggg");
                    res.send(data1);
                })
            } else {
                console.log("hgjahgduayuy")
            }
        })

    } catch {
        res.status(500).send()
    }
};

exports.Upload = async (req, res) => {
    console.log("upload");
    try {
        // await uploadFile(req, res);
        // console.log(req.fileurl,"asddasas");
        console.log(req.fileurl, "uhhv")
        if (req.fileurl == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        res.status(200).send({
            message: "Uploaded the file successfully: " + req.fileurl,
        });
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};

exports.EmailUser = function (req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harsh.hp42774@gmail.com',
            pass: 'Harsh$42774'
        },
        secure: true
    })
    var mailOptions = {
        from: 'harsh.hp42774@gmail.com',
        to: 'tusharpatel1168@gamil.com',
        subject: 'Sending mail for testing',
        text: 'easy!!!',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.res);
        }
    });
};

