var express = require('express'),
    router = express.Router(),
    // mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://172.16.20.85:27017/";
var quote = require('../model/quote');

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

//build the REST operations at the base for signup
//this will be accessible from http://127.0.0.1:3000/signup if the default route for / is left unchanged
router.route('/')
//GET all signup

//POST a new signup
    .post(function(req, res) {
        console.log('POST req received');// Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        console.log(req.body);

        var fare = req.body.fare;
        var id = req.body.D_id;

        var fareNum = parseFloat(fare);

        MongoClient.connect(url, function(err, db) {
            //if (err) throw err;
            var dbo = db.db("autoConnect");
            var myquery = { L_quote_fare: { $min: $L_quote_fare } };

            dbo.collection(quote).find(myquery, { projection: {  _id:0, L_quote_fare: 1 } }).toArray(function(err, result) {
                console.log(result);


        });


    });

module.exports = router;