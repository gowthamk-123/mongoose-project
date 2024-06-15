const { Product, User, Cart } = require('../model/Product');
//get all the products
const products_all= async(req,res)=>{
    try{
        const product = await Product.find()
        console.log('Data sent')
        res.json(product)
    }
    catch(error){
        console.log('Fetch error:-',error)
        res.json({'message':error})
    }
}

const cartfetch= async(req,res)=>{
    try{
        const cart = await Cart.find()
        console.log('Data sent')
        res.json(cart)
    }
    catch(error){
        console.log('Fetch error:-',error)
        res.json({'message':error})
    }
}

const auth= async(req,res)=>{
    const { u_name, u_pwd } = req.body;
    const obj = { u_name, u_pwd };

    try{
        const user = await User.findOne(obj);

        if (user) {
            res.status(200).json({ 'auth': 'success', 'user': u_name });
        } else {
            res.status(401).json({ 'auth': 'failed' });
        }
        console.log('Auth response sent');
    } 
    catch (err) {
        console.error('Error in connection or operation:', err);
        res.status(500).json({ 'auth': 'failed', 'error': 'Internal Server Error' });
    }
};

//insert a product
const insert_product = async (req, res) => {
    const product = new Product({
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_cost: req.body.p_cost,
        p_cat:req.body.p_cat,
        p_img:req.body.p_img,
        p_desc:req.body.p_desc
    })
    try {
        const savedProduct = await product.save()
        console.log('Product inserted')
        res.send(savedProduct)
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const create_user = async(req,res)=>{
    const user = new User({
        u_id:req.body.u_id,
        u_name:req.body.u_name,
        u_pwd:req.body.u_pwd,
        u_u_email:req.body.u_u_email,
        u_addr:req.body.u_addr,
        u_u_contact:req.body.u_u_contact

    })
    try{
        const saveduser= await user.save()
        console.log('User inserted')
        res.send(saveduser)
    }catch(error){
        res.status(400).send(error)
    }
}

const insert_cart = async(req,res)=>{
    const cart = new Cart({
        p_id:req.body.p_id,
        p_img:req.body.p_img,
        u_name:req.body.u_name,
        p_cost:req.body.p_cost

    })
    try{
        const insertcart= await cart.save()
        console.log('User inserted')
        res.send(insertcart)
    }catch(error){
        res.status(400).send(error)
    }
}


const update_product = async (req, res) => {
    let p_id = req.body.p_id
    const product = {
        p_name: req.body.p_name,
        p_cost: req.body.p_cost,
        p_cat:req.body.p_cat,
        p_img:req.body.p_img,
        p_desc:req.body.p_desc,
    }
    try {
        const updateProduct = await Product.updateOne(
            { p_id }, product
        )
        if (updateProduct.modifiedCount !== 0) {
            console.log('Product Updated', updateProduct)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('Product not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const update_cart = async (req, res) => {
    let p_id = req.body.p_id
    const updatedcart = {
        u_name: req.body.u_name,
        p_cost: req.body.p_cost,
        p_img:req.body.p_img,
    }
    try {
        const updateCart = await Cart.updateOne(
            { p_id }, updatedcart
        )
        if (updateCart.modifiedCount !== 0) {
            console.log('Cart Updated', updateCart)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('Cart not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}


const delete_product = async (req, res) => {
    let p_id = req.body.p_id
    try {
        const deletedproduct = await Product.deleteOne({ p_id })
        if (deletedproduct.deletedCount != 0) {
            console.log('Product Deleted')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('Product Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const delete_cart = async (req, res) => {
    let p_id = req.body.p_id
    try {
        const deletecart = await Cart.deleteOne({ p_id })
        if (deletecart.deletedCount != 0) {
            console.log('Product Deleted from cart')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('Product Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    products_all,
    insert_product,
    update_product,
    delete_product,
    auth,cartfetch,
    create_user,
    insert_cart,
    update_cart,
    delete_cart
}
