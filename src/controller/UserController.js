const User = require('../models/User')
const bcrypt = require('bcryptjs')
module.exports = {
    async index(req, res){
        const user = await User.findAll()
        if(user) return res.send(user)
    },
    async store(req, res){
        let {name, email, password} = req.body
        console.log(name, email, password)
        /* password = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password})
        res.send(user) */
    },
    async login(req, res){
        let {email, password} = req.body
        const user = await User.findAll({where:{
            email:email
        }})
        if(user.length == 1){
            use = user[0]
            if (use.email == email && await bcrypt.compare(password, use.password)){
                req.session.user_id = use.id
                res.send('User logged in')
            }
        }else{
            res.send({'error': "I can't find the email"})
        }
    },
    async update(req, res){
        const {name, email, password} = req.body
        const user = await User.findByPk({id:user_id})
        if (user){
            return user.update({name, email, password}, {
                where: {
                    id: user_id
                }
            }).then(user => res.send(user))
        }
        else return res.send({'error': 'User not found'})
    },
    async remove(req, res){
        const {user_id} = req.session
        const user = await User.destroy({where:{
            id: user_id
        }})
        return res.send({'message': 'User dropped'})
    },
    async logout(req, res){
        req.session.destroy()
        return res.redirect('/home')
    }
}