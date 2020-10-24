const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userView=require('./routers/userView');

app.use(express.json());
app.use('/userView',userView);
mongoose.connect('mongodb://localhost:27017/userview',{});
mongoose.connection.on('err',(err)=>{
    if(err){
        console.log("Database is not connected");
        process.exit(1);
    }
}).once('open',()=>{
    console.log("Database is connected");
});
app.listen(8080,(err)=>{
    if(err){
        console.log("not Connected");
    }else{
        console.log("Connected");
    }
});
