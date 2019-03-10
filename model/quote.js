var mongoose = require('mongoose');
var quoteSchema = new mongoose.Schema({
    G_id:String,
    N_trips:Number,
    quote_D_id: String,
    quote_fare: Number,
    L_quote_D_id: String,
    L_quote_fare: Number
});
mongoose.model('quote', quoteSchema);