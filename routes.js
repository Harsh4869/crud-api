const usercontroller = require('../controller/user.controller')
const employee = require('../model/employee')

module.exports = (app) =>{
app.post('/insert', usercontroller.Insert)
app.put('/update',usercontroller.Update)
app.delete('/delete',usercontroller.Delete)
app.get('/allemployeelist',usercontroller.allEmployees)
app.patch('/limit',usercontroller.Limit)
app.post('/order',usercontroller.Order)
app.patch('/join',usercontroller.Join)
}