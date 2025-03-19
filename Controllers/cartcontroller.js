const Cart=require('../Models/cart')
exports.addtocart=async(req,res)=>{
    const{productId,name,price}=req.body
    if(!productId)return res.status(400).json({message:"product id is misssing"})
    let cart=await Cart.findOne({userId:req.user.id})
    if(!cart){
        cart=new Cart({userId:req.user.id,items:[]})
    }
    const existingitem=cart.items.find((item)=>item.productId && item.productId.toString()===productId.toString)
    if(existingitem){
        existingitem.quantity++
    }
    else{
        cart.items.push({productId,name,price})
    }
    await cart.save()
    res.json({cart,message:"item added to cart"})
}
exports.getCart = async(req,res)=>{
    const cart = await cart.findOne({userId:req.user.id})
    res.json(cart? cart.items:[])
}
exports.removeFromCart=async(req,res)=>{
    const{productId}=req.body
    let cart=await Cart.findOne({userId:req.user.id})
    if(!cart)return res.status(400).json({message:"cart not found"})

    cart.items=cart.items.filter((item)=>item.productId!==productId)
    await cart.save()
    res.json({cart,message:"items removed from"})
}