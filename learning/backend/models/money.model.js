const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moneySchema = new Schema({
    title:{type:String,require:true},
    twoThous:{type:Number,require:true},
    fiveHun:{type:Number,require:true},
    twoHun:{type:Number,require:true},
    oneHun:{type:Number,require:true},
    fifty:{type:Number,require:true},
    totalNotes:{type:Number,require:true},
    totalAmt:{type:Number,require:true},
    words:{type:String,require:true},
    userId:{type:String,required:true}
},
{timestamps:true});

const Money = mongoose.model('Money',moneySchema);

module.exports = Money;
