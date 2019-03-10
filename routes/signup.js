var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

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
        var name = req.body.name;
        var phno =  req.body.phno;
        var lino =  req.body.lino;
        var idp =  req.body.idp;
        var uname =  req.body.uname;
        var pass =  req.body.pass;
        
        //call the create function for our database
        mongoose.model('driver').create({
            name : name,
            phno : phno,
            lino: lino,
            idp : idp,
            uname : uname,
            pass : pass
        }, function (err, signup) {
            if (err) {
                res.send("There was a problem adding the information to the database.");
            } else {
                //signup has been created
                console.log('POST creating new signup: ' + signup);
                res.format({
                    //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
                    html: function(){
                        // If it worked, set the header so the address bar doesn't still say /adduser
                        res.location("signup");
                        // And forward to success page
                        res.redirect("/");
                    },
                    //JSON response will show the newly created signup
                    json: function(){
                        res.json(signup);
                    }
                });
            }
        })
    });

module.exports = router;