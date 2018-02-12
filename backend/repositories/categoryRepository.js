const Repository = require('./generalRepository'),
Category = require('../schemas/categorySchema');

function CategoryRepository() {
	Repository.prototype.constructor.call(this);
	this.model = Category;
}

CategoryRepository.prototype = new Repository();

module.exports = new CategoryRepository();
