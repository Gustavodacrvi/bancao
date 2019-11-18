const Client = require('../models/Client')
const User = require('../models/User')

module.exports = {
    async index(req, res){
        const {user_id} = req.session
        const user = await User.findByPk(user_id, {include: {
            association: 'clients'
        }})
        if(user){
            const client = await Client.findAll({where:{
                user_id
            }})
            if(client) return res.send(client)
        }
    },
    async store(req, res){
        const {user_id} = req.session
        const user = await User.findByPk(user_id, {include: {
          association: 'clients'
        }})
        const {name, email, phone} = req.body
        if(user){
            const client = await Client.create({name, email, phone, user_id})
            return res.send(client)
        }else{
            return res.send({'error': 'User not found'})
        }
    },
    async update(req, res){
        const {id} = req.params
        const {user_id} = req.session
        const {name, email, phone} = req.body
        const user = await User.findByPk(user_id, {include: {
            association: 'clients'
        }})
        if(user){
            const client = await Client.findByPk(id)
        if (client){
            return client.update({name, email, phone}, {
                where: {
                    id
                }
            }).then(client => res.send(client))
        }
        else return res.send({'error': 'Client not found'})
        }
            },
    async remove(req, res){
        const {user_id} = req.session
        const {id} = req.params
        const user = await User.findByPk(user_id, {include: {
            association: 'clients'
        }})
        if (user){
            const client = await Client.destroy({where:{
                id
            }})
            return res.send({'message': 'Client dropped'})
        }
    }
}