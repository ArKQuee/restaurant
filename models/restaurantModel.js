const mongoose = require('mongoose');
const Item = require('./itemModel')




const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    item: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
}]

});

model.exports = mongoose.model('Restaurant',restaurantSchema);