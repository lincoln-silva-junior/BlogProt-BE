'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = async(data) => {
    var user = new User(data);
    await user.save();         
}

exports.authenticate = async(data) => {   
    console.log('data: ' + JSON.stringify(data)); 
    console.log('data: ' + JSON.stringify(data.email)); 
    console.log('data: ' + JSON.stringify(data.password)); 
    const res = await User.findOne({
            email: data.email,
            password: data.password   
        });    
    return res;        
}

exports.getById = async(id) => {
    const res = await User.findById(id);
    return res;
}

 