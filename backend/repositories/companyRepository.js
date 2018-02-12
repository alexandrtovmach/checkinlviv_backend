const Repository = require('./generalRepository'),
Company = require('../schemas/companySchema');

function CompanyRepository() {
	Repository.prototype.constructor.call(this);
	this.model = Company;
}

CompanyRepository.prototype = new Repository();

CompanyRepository.prototype.getByCategory = function(category, callback) {
    const query = this.model.find({category: category});
    query.exec(callback);
}



module.exports = new CompanyRepository();
