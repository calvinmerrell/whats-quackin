module.exports ={
addToCart: async (req,res) =>{
console.log(req.session.cart)
console.lob(req.body)
req.session.cart.cart.push(res.body)
//need to update total
//respond with req.session.cart
}
}
