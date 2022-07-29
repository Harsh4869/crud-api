const express = require('express')
const app = express()
const sqlCon = require('./config/db.config')
const route = require('./routes/routes')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


app.listen(3000, () => {
    console.log('server connected')
}) 





 

