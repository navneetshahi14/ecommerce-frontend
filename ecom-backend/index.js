const express = require('express');
const app = express();
const ConnectMongoose = require('./db')

ConnectMongoose()
app.listen(7042,()=>{
    console.log('Server started at localhost 7042');
})

app.use(express.json())

app.use('/api/auth',require('./router/auth'))

app.get('/',(req,res)=>{
    res.send("hello world");
})