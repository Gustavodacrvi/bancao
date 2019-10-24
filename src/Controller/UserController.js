const User = require('../models/User')

module.exports = {
    async index(req, res){
        const user = await User.findAll()
        if(user) return res.send(user)
    },
    async store(req, res){
        const {name, email, password} = req.body
        const user = await User.create({name, email, password})
        res.send(user)
    },
    async update(req, res){
        const {id} = req.params
        const {name, email, password} = req.body
        const user = await User.findByPk(id)
        if (user){
            return user.update({name, email, password}, {
                where: {
                    id
                }
            }).then(user => res.send(user))
        }
        else return res.send({'error': 'User not found'})
    },
    async remove(req, res){
        const {id} = req.params
        const user = await User.destroy({where:{
            id
        }})
        return res.send({'error': 'User dropped'})
    }
}