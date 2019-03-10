var mongoose = require('mongoose');
var hotspotSchema = new mongoose.Schema({
    dpoint: String,
    G_id: String,
    N_trip: Number,
    N_pass: Number,
    PL_Id: Number,
    fdes: String,
    atime: Number
});

mongoose.model('hotspot', hotspotSchema);