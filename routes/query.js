var express = require('express'),
    router = express.Router(),
    // mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://172.16.20.85:27017/";
var driver = require('../model/driver.js');

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

//build the REST operations at the base for signup
//this will be accessible from http://127.0.0.1:3000/signup if the default route for / is left unchanged
router.route('/')
//GET all signup

//POST a new signup
    .post(function(req, res) {
        console.log('POST req received');// Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        console.log(req.body);

        var place = req.body.place;
        var time = req.body.time;
        var dist = req.body.distance;

        var distNum = parseFloat(dist);
        var timeNum = parseInt(time);

        var count = 0;

        MongoClient.connect(url, function(err, db) {
            //if (err) throw err;
            var dbo = db.db("autoConnect");
            var myquery = { distance: { $lt: distNum } };

            dbo.collection(place).find(myquery, { projection: {  _id:0, dpoint: 1 } }).toArray(function(err, result) {
                console.log(result);
                //   if (err) throw err;
                var i=0;
                for(i=0;i<result.length;i++){
                    //if (err) break;
                    console.log("loop 1");
                    var query = { dpoint: result[i].dpoint };
                    //console.log('loop0');
                    dbo.collection("hotspots").find(query, { projection: { _id: 0, dpoint: 1, G_id: 1, N_trip: 1, fdes: 1} }).toArray(function(err, result) {
                        if (err) throw err;
                        console.log("second query");
                        console.log(result);

                        for(i=0;i<result.length;i++){ //console.log('loop1');
                            console.log("loop 2");
                            if((result[i].atime > timeNum) && (result[i].atime <= (timeNum + 200))){
                                console.log("in if...")
                                count= count + parseInt(result[1].N_trip);
                                // result);

                                console.log(result[i].G_id);
                                console.log(result[i].N_trip);
                                console.log(result[i].fdes);




                            }
                        }
                        res.end("goodbye");
                        db.close();
                    });
                }


                console.log("count = " + count);

                db.close();
            });

        });


    });

module.exports = router;