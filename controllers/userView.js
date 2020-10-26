const moment = require("moment");
const express = require('express');
const userView_schema = require('../schemas/userView');

const userView_Router = express.Router();

exports.create = async (req, res) => {
    try {
        await userView_schema.insertMany(req.body, (err, data) => {
            if (err) {
                res.send(err);
            } res.send(data);
        });
    } catch (error) {
        console.log(error)
    }
}

exports.display = async (req, res) => {
    try {
        await userView_schema.find((err, data) => {
            if (err) {
                res.send(err);
            } if (data.length <= 0) {
                res.send("no data found");
            } else {
                res.send(data);
            }
        });
    } catch (err) {
        res.send(err);
    }
}

exports.display_user_daily = async (req, res) => {
    try {
        var product_id = req.body.ProductID;
        var today = moment().startOf('day');
        var tomorrow = moment(today).endOf('day');
        await userView_schema.find({ ProductID: product_id, ViewDate: { '$gt': today, '$lte': tomorrow } }, (err, data) => {
            if (err) {
                res.send(err);
            } if (data.length <= 0) {
                res.send("no data found");
            } else {
                res.send(data);
            }
        });
    } catch (err) {
        res.send(err);
    }
}

exports.display_user_monthly = async (req, res) => {
    try {
        var product_id = req.body.ProductID;
        var startDate = moment().startOf('month');
        var endDate = moment().endOf('month');
        await userView_schema.find({ ProductID: product_id, ViewDate: { '$gte': startDate, '$lte': endDate } }, (err, data) => {
            if (err) {
                res.send(err);
            } if (data.length <= 0) {
                res.send("no data found");
            } else {
                res.send(data);
            }
        });
    } catch (err) {
        res.send(err);
    }
}

exports.display_user_weekly = async (req, res) => {
    try {
        var product_id = req.body.ProductID;
        var startDay = moment().day(0);;
        var endDay = moment().day(6);;
        await userView_schema.find({ ProductID: product_id, ViewDate: { '$gte': startDay, '$lte': endDay } }, (err, data) => {
            if (err) {
                res.send(err);
            } if (data.length <= 0) {
                res.send("no data found");
            } else {
                res.send(data);
            }
        });
    } catch (err) {
        res.send(err);
    }
}

exports.display_user_custom_date = async (req, res) => {
    try {
        var product_id = req.body.ProductID;
        var custome_date = req.body.ViewDate
        await userView_schema.find({ ProductID: product_id, ViewDate: custome_date }, (err, data) => {
            if (err) {
                res.send(err);
            } if (data.length <= 0) {
                res.send("no data found");
            } else {
                res.send(data);
            }
        });
    } catch (err) {
        res.send(err);
    }
}


