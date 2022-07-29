const express = require('express')
const employees = require('../model/employee')
const sql = require("../config/db.config")





//MySQL operations

exports.Insert = (req, res) => {
    console.log(req.body);
    let temp = {
        pay: req.body.pay,
        address: req.body.address,
        name: req.body.name
    }
    // sql.query(`INSERT INTO EMPLOYEES (name, address) VALUES ('${temp.name}','${temp.address}')`, (err, data) => {
        sql.query(`INSERT INTO salary (pay) VALUES ('${temp.pay}')`, (err, data)=>{
        if (err) {
            console.log("error: ", err);
            res.send(err, null);
            return;
        }
        console.log("created employee: ");
        if (data.affectedRows == 1) {
            res.send(temp)
        } else {
            res.send('some error ocoure')
        }
        // res.send(data)

    });
};

exports.Update = async function (req, res) {
    console.log(req.body)
    let temp = {
        name :req.body.name,
        address :req.body.address
    };
    // console.log("hbegbh")
    sql.query(`SELECT * FROM EMPLOYEES WHERE id='${req.body.id}'`, (err, result) => {
        console.log("ncjbuh", result)
        if (err) {
            console.log("error: ", err)
            res.send(err, null);
            return;

        } else {

            sql.query(`UPDATE EMPLOYEES SET name =('${req.body.name}') where id=('${req.body.id}')`, (err, data) => {
                if (err) {
                    console.log("error: ", err);
                    res.send(err, null);
                    return;
                }
                if (data.affectedRows == 1) {
                    // not found
                    res.send(temp)
                  }else{
                  console.log("some error")
                }
            }
         )}
     })
};
        
 exports.Delete = (req, res) => {
     console.log(req.body)
    sql.query(`DELETE FROM EMPLOYEES WHERE id='${req.body.id}'`, (err, data) => {
        console.log("jcnc", data)
        if (err) {
            console.log("error: ", err)
            res.send(err, null);
            return;
            
            }console.log("deleted employee");
            if (data.affectedRows == 1) {
                // not found
                res.send(data)
              }else{
              console.log("bad request")
            }
    })
};

exports.allEmployees = (req, res) => {
    console.log(req.body)
    sql.query("SELECT * FROM EMPLOYEES", (err, data) =>{ 
        console.log("jcnc", data)
        if(err) throw(err);
        res.send(data)
    })
};

exports.Limit = (req, res) => {
    console.log(req.body)
    sql.query("SELECT * FROM EMPLOYEES LIMIT 4", (err, data) =>{
        console.log("ajajhs", data)
        if(err) throw(err)
        res.send(data)
    })
};

exports.Order = (req, res) => {
    console.log(req.body)
    sql.query("SELECT * FROM EMPLOYEES ORDER BY name", (err, data) =>{
         console.log("sayv", data)
         if(err) throw(err)
         res.send(data)
    });
};

exports.Join = (req, res) => {
    console.log(req.body)
    sql.query("SELECT employees.name as employee, salary.pay AS amount FROM employees JOIN salary ON employees.id = salary.id", (err, data) =>{
        console.log("suxh", data)
        if(err) throw(err)
        res.send(data)
    })
};
