const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const PORT = 3000
require('./database/index')
app.use(bodyParser.json())
app.use(session({name: 'id', secret: 'DEVWAYTEST', resave:true, saveUninitialized:false, cookie:{
    expires: 60 * 1000 * 60,
}}))
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', require('./routes.js'))

app.listen(PORT, ()=>{
    console.log('App running on port 3000')
})