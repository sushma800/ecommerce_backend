const express =require('express')
const authMidleware = require('../middleware/authmidleware')
const { addtocart, getCart, removeFromCart } = require('../Controllers/cartcontroller')

const cartrouter=express.Router()

cartrouter.post("/add",authMidleware,addtocart)
cartrouter.get("/",authMidleware,getCart)
cartrouter.post("/remove",authMidleware,removeFromCart)
module.exports=cartrouter