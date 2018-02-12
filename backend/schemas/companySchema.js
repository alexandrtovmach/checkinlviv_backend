var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: {
        en: String,
        ru: String,
        ua: String
    },
    description: {
        en: String,
        ru: String,
        ua: String
    },
    logo: String,
    address: {
        en: String,
        ru: String,
        ua: String
    },
    email: String,
    category: [String],
    link: String,
    phones: {
        main: [String],
        reception: [String],
        fax: [String],
        book: [String],
        restaurant: [String]
    },
    isMarkedCheckInLviv: Boolean,
    banners: {
        indexMainImg: String,
        categorySideImg: String,
    }

});

module.exports = mongoose.model('Company', companySchema);