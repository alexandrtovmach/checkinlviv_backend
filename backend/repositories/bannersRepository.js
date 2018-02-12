const Repository = require('./generalRepository'),
Banners = require('../schemas/bannersSchema');

function BannersRepository() {
	Repository.prototype.constructor.call(this);
	this.model = Banners;
}

BannersRepository.prototype = new Repository();

module.exports = new BannersRepository();
