var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannersSchema = new Schema({
    name: String,
    bg: String
});

module.exports = mongoose.model('Banners', bannersSchema);