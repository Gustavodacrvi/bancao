const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
require('./database/index')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', require('./routes.js'))

app.listen(PORT, ()=>{
    console.log('App running on port 3000')
})