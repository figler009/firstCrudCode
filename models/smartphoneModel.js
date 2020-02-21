'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SmartphoneSchema = Schema({
    phoneName:String,
    brand:String,
    price:Number,
    data:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Smartphone',SmartphoneSchema);
