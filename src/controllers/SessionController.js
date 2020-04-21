// index, show, store, update, destroy, transfer, deposit, withdraw 
const User = require('../model/User');

module.exports = {
    async store(req, res) {
       const { name, user, cpf, email, image } = req.body;
        let users = await User.findOne({name, user, cpf, email, image });

        if(!users){
             users = await User.create({name, user, cpf, email, image });
        }
       
        return res.json(users); 
      
       }
       
    } 