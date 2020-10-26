const express=require('express');
const userView_Router=express.Router();

const userView = require("../controllers/userView")

userView_Router.post("/insert", userView.create)
userView_Router.get("/display", userView.display)
userView_Router.get("/display_user_daily", userView.display_user_daily)
userView_Router.get("/display_user_weekly", userView.display_user_weekly)
userView_Router.get("/display_user_monthly", userView.display_user_monthly)
userView_Router.get("/display_user_custom_date", userView.display_user_custom_date)

module.exports=userView_Router;
