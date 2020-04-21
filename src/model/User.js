const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }, 
    image: {
        type: String,
        
    },
    
    
},
{
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);