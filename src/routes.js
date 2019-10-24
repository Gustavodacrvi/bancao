const express = require('express')
const router = express.Router()
const UserController = require('./controller/UserController')
const ClientController = require('./controller/ClientController')

router.get('/', (req, res)=>{
    res.send({hello: 'World'})
})


function User(){
    router.get('/users', UserController.index)
    router.post('/users',UserController.store)
    router.put('/users/:id',UserController.update)
    router.delete('/users/:id',UserController.remove)
}
User()
function Clients(){
    router.get('/users/:user_id/clients', ClientController.index)
    router.post('/users/:user_id/clients', ClientController.store)
    router.put('/users/:user_id/clients/:id', ClientController.update)
    router.delete('/users/:user_id/clients/:id', ClientController.remove)
}
Clients()

module.exports = router