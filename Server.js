const express = require('express')
const cors = require('cors')
const { isObjectIdOrHexString } =require('mongoose');
const connectDB = require('./Config/db');
const router = require('./routes/authroutes');
const cartrouter = require('./routes/cartroutes');

const app = express();

const allowedOrigins=[ecommerce-frontend-afiayfhk0-sushmita-patils-projects.vercel.app,ecommerce-frontend-lime-alpha.vercel.app]

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers if needed
  }))
app.use(express.json())

connectDB()
app.use("/auth",router)
app.use("/cart",cartrouter)
app.get('/',(req,res)=>{
    res.send('hello,world')
})
const port =5000
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})