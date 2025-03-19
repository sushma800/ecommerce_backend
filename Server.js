const express = require('express')
const cors = require('cors')
const { isObjectIdOrHexString } =require('mongoose');
const connectDB = require('./Config/db');
const router = require('./routes/authroutes');
const cartrouter = require('./routes/cartroutes');

const app = express();

app.use(cors())
app.use(express.json())

connectDB()
app.use("/auth",router)
app.use("/cart",cartrouter)
app.get('/',(req,res)=>{
    res.send('hello,world')
})
const port =8000
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})