const express = require('express')
const router = express.Router()
const UserController = require('./controller/UserController')
const ClientController = require('./controller/ClientController')

router.get('/users', UserController.index)
router.post('/users',UserController.store)
router.put('/users/',UserController.update)
router.delete('/users/',UserController.remove)
router.get('/logout', UserController.logout)
router.get('/users/clients', ClientController.index)
router.post('/users/clients', ClientController.store)
router.put('/users/clients/:id', ClientController.update)
router.delete('/users/:user_id/clients/:id', ClientController.remove)

router.get('*', (req, res)=>{
  res.sendFile('../front/publid/index.html')
})

module.exports = router