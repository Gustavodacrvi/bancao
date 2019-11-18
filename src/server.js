const express = require('express')
const session = require('express-session')
const app = express()
const PORT = 3000
require('./database/')
app.use(express.json())
app.use(session({name: 'id', secret: 'DEVWAYTEST', resave:true, saveUninitialized:false, cookie:{
    expires: 60 * 1000 * 60,
}}))
app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes.js'))

app.listen(PORT, ()=>{
    console.log('App running on port 3000')
})