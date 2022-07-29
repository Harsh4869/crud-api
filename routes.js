const usercontroller = require('../controller/UserController')
const uploadFile = require("../middleware/upload");
const user = require('../model/user');
// const EmailUser = require("../utils/nodemailerTemplate");
module.exports = (app) =>{
    app.get('/alluserlist', usercontroller.Alluserlist)
    app.post('/createuser', usercontroller.CreateUser)
    app.delete('/deleteUser/:id', usercontroller.DeleteUser)
    app.patch('/updateUser', usercontroller.UpdateUser)
    app.post('/upload',uploadFile,usercontroller.Upload)
    app.post('/email', usercontroller.EmailUser)
   
    // app.get('/login',usercontroller.Login)
    // app.post('/adduser',usercontroller.AddUser)
    // app.get('/getuser',usercontroller.GetUsers)
    // app.get('/profile',usercontroller.Profile)


}