var mongoose = require('mongoose');
var passengerSchema = new mongoose.Schema({
    P_id: String,
    fname: String,
    lname: String,
    bpoint: String,
    dpoint: String,
    operator: String,
    vehnum: String,
    fdes: String,
    atime: Number,
    G_id: String
});
mongoose.model('passenger', passengerSchema);