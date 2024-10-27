const mongoose = require('mongoose'); // Fixing the typo in 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    }
});


const User = mongoose.model("User", schema); 

module.exports = User; 
