var mongoose = require('mongoose');
var quoteSchema = new mongoose.Schema({
    G_id:String,
    quote:{
        qt:Number,
        G_id: String,
        D_id: String
    },
    L_quote:{
        qt:Number,
        G_id: String,
        D_id: String
    }
});
mongoose.model('quote', quoteSchema);