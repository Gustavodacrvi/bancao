const Client = require('../models/Client')

module.exports = {
    async index(req, res){
        const client = await Client.findAll()
        if(client) return res.send(Client)
    },
    async store(req, res){
        const {name, email, password} = req.body
        const client = await Client.create({name, email, password})
        res.send(client)
    },
    async update(req, res){
        const {id} = req.params
        const {name, email, password} = req.body
        const client = await Client.findByPk(id)
        if (client){
            return client.update({name, email, password}, {
                where: {
                    id
                }
            }).then(client => res.send(client))
        }
        else return res.send({'error': 'Client not found'})
    },
    async remove(req, res){
        const {id} = req.params
        const client = await Client.destroy({where:{
            id
        }})
        return res.send({'error': 'Client dropped'})
    }
}