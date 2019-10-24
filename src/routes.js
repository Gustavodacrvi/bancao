const express = require('express')
const router = express.Router()
const UserController = require('./Controller/UserController')

router.get('/', (req, res)=>{
    res.send({hello: 'World'})
})

router.get('/users', UserController.index)

router.post('/users',UserController.store)
router.put('/users/:id',UserController.update)
router.delete('/users/:id',UserController.remove)

module.exports = router