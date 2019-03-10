var mongoose = require('mongoose');
var driverSchema = new mongoose.Schema({
    D_id: String,
    name: String,
    phno: String,
    lino: String,
    idp: String,
    uname: String,
    pass: String
});
mongoose.model('driver', driverSchema);