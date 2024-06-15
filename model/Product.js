//import mongoose
const mongoose = require('mongoose')
//create schema
const productSchema= new mongoose.Schema({
    p_id:Number,
    p_name:String,
    p_cost:Number,
    p_cat:String,
    p_desc:String,
    p_img:String
   
}, { collection: 'product' }) 

const userSchema= new mongoose.Schema({
    u_id:Number,
    u_name:String,
    u_pwd:Number,
    u_u_email:String,
    u_addr:String,
    u_u_contact:Number
    
}, { collection: 'users' }) 

const cartSchema= new mongoose.Schema({
    p_id:Number,
    p_img:String,
    u_name:String,
    p_cost:Number,
    
}, { collection: 'cart' }) 



module.exports = {Product: mongoose.model('Product', productSchema),
User: mongoose.model('User', userSchema),
Cart: mongoose.model('Cart', cartSchema)}