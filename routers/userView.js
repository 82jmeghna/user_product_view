const moment = require("moment");
const express=require('express');
const userView_schema=require('../schemas/userView');

const userView_Router=express.Router();

userView_Router.post('/insert',(req,res)=>{
    try{
        userView_schema.insertMany(req.body,(err,data)=>{
            if(err){
                res.send(err);
            }res.send(data);
        });
    }catch(error){
        console.log(error)
    }
    
});

userView_Router.get('/display',(req,res)=>{
    userView_schema.find((err,data)=>{
        if(err){
            res.send(err);
        }if(data.length<=0){
            res.send("no data found");
        }else{
            res.send(data);
        }
    });
});

userView_Router.get('/display_user_daily',(req,res)=>{
    var product_id = req.body.ProductID;
    var today = moment().startOf('day');
    var tomorrow = moment(today).endOf('day');

    userView_schema.find({ProductID : product_id,ViewDate : {'$gt' : today,'$lte' : tomorrow}}, (err,data) => {
        if(err){
            res.send(err);
        }else{
            console.log(data)
            res.send(data);
        }
    });
})

userView_Router.get('/display_user_monthly',(req,res)=>{
    var product_id = req.body.ProductID;
    var startDate = moment().startOf('month');
    var endDate = moment().endOf('month');

    userView_schema.find({ProductID : product_id,ViewDate : {'$gte' : startDate,'$lte' : endDate}}, (err,data) => {
        if(err){
            res.send(err);
        }else{
            console.log(data)
            res.send(data);
        }
    });
})

userView_Router.get('/display_user_weekly',(req,res)=>{
    var product_id = req.body.ProductID;
    var startDay = moment().day(0);;
    var endDay = moment().day(6);;

    userView_schema.find({ProductID : product_id,ViewDate : {'$gte' : startDay,'$lte' : endDay}}, (err,data) => {
        if(err){
            res.send(err);
        }else{
            console.log(data)
            res.send(data);
        }
    });
})

userView_Router.get('/display_user_custom_date',(req,res)=>{
    var product_id = req.body.ProductID;
    var custome_date = req.body.ViewDate

    userView_schema.find({ProductID : product_id,ViewDate : custome_date}, (err,data) => {
        if(err){
            res.send(err);
        }else{
            console.log(data)
            res.send(data);
        }
    });
})
module.exports=userView_Router;
