var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannersSchema = new Schema({
    name: String,
    image: String,
    page: String,
    position: Number,
    order: Number
});

module.exports = mongoose.model('Banners', bannersSchema);