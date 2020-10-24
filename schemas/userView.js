const mongoose=require('mongoose');
const schema=mongoose.Schema;
const userView=new schema({
    UserID : {type:String,required:true,trim:true},
    ViewDate : {type:Date,required:true},
    ProductID : {type:String,required:true,trim:true} 
},{collections:"userView",timestamps:true}
);
module.exports=mongoose.model("userView",userView);