const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    address:{type:String,required:true},
    userId:{type:String,required:true}
},{timestamps:true});

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;