const express = require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')

let url = require('./url')
//const { products_all } = require('./apis/productApis')
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
const productRoutes = require('./routes/productRoutes')

app.use('/',productRoutes)
mongoose.connect(url,{dbName:"Project"}).then(()=>{
    console.log('Connection Success')

},(errRes)=>{
    console.log('Connextion failed:-',errRes)
})


//create port
let port = 8080
//assign port no
app.listen(port, () => {
    console.log('Server listening port no:- ', port)
})
