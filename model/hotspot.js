var mongoose = require('mongoose');
var hotspotSchema = new mongoose.Schema({
    Pl_id: String,
    N_groups: Number,
    G_ids: {
        G_id: String,
        N_trips: Number
    },
    N_trips_tot: Number
});

mongoose.model('hotspot', hotspotSchema);