const express =require('express')
const app =express()
// const connectDB = require("./db");

// connectDB()
app.get('/api',(req,res)=>{
   res.send('Hello from server, MERN stack docker github action testing')
})

const PORT =5000

app.listen(PORT,()=>console.log(`Server started at port ${PORT}` ))