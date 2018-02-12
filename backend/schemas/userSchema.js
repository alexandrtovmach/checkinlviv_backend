var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    createdAt: Number,
    subscribes: [{
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }]
});

module.exports = mongoose.model('User', userSchema);