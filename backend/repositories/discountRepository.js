const Repository = require('./generalRepository'),
Discount = require('../schemas/discountSchema');

function DiscountRepository() {
	Repository.prototype.constructor.call(this);
	this.model = Discount;
}

DiscountRepository.prototype = new Repository();

DiscountRepository.prototype.getAllDiscounts = function(callback) {
    const query = this.model.find({}).populate('company');;
    query.exec(callback);
}

DiscountRepository.prototype.getById = function(id, callback) {
    const query = this.model.findOne({_id: id, isUsed: false}).populate('company');;
    query.exec(callback);
}

DiscountRepository.prototype.getNotUsedDiscountById = function(id, callback) {
    const query = this.model.find({_id: id, isUsed: false}).populate('company');;
    query.exec(callback);
}

DiscountRepository.prototype.getByCategory = function(category, callback) {
    const query = this.model.find({category: category});
    query.exec(callback);
}

module.exports = new DiscountRepository();
