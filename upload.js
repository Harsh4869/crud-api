// const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const path =require("path");
frontEndUrl =  'http://localhost:1000'


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
  },
});

let uploadFile = multer({storage: storage,}).array("file")
  
module.exports = function (req, res, next) {
    uploadFile(req, res, (err) => {
       if (err) {
          res.status(400).send("Something went wrong!");
       }
       if (req.files) {
           let urlarray=[]
           req.files.map((element,index)=>{
            var path = element.filename;
            path = `${frontEndUrl}/images/${path}`;
            urlarray.push(path);
           })
          req.fileurl = urlarray;
       } else {
        let urlarray=[]
          req.fileurl = urlarray;
       }
       next();
    });
 }
