var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var discountSchema = new Schema({
    email: String,
    createDate: Number,
    isUsed: Boolean,
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }
});

module.exports = mongoose.model('Discount', discountSchema);