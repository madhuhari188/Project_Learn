const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    
    name:{type:String,require:true},
    userId:{type:String,unique:true},
    email:{type:String,require:true},
    pic:{type:String,require:true},
    },
    {
        timestamps:true
    });

const Profile = mongoose.model('Profile',profileSchema);

module.exports = Profile;