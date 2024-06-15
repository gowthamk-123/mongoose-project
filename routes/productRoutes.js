//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/productApis')
//fetch all records
router.get("/fetch", productApi.products_all)
//fetch chart
router.get("/cartfetch", productApi.cartfetch)
//insert a record
router.post("/insert", productApi.insert_product)
//createuser
router.post("/createuser", productApi.create_user)
//insertcart
router.post("/insertcart", productApi.insert_cart)
//update a record
router.put("/update", productApi.update_product)
//update a cart
router.put("/updatecart", productApi.update_cart)
//delete a record
router.delete("/delete", productApi.delete_product)
//delete a record in cart
router.delete("/deletecart", productApi.delete_cart)
//Authentication
router.post("/auth", productApi.auth)
//export router
module.exports = router
