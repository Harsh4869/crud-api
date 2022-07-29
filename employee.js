const mysql = require('mysql');


const employees = function(employee) {
  this.name = employee.name;
  this.address = employee.address;
  this.pay = employee.pay;
};

