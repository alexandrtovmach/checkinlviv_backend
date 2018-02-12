const Repository = require('./generalRepository'),
User = require('../schemas/userSchema');

function UserRepository() {
Repository.prototype.constructor.call(this);
this.model = User;
}

UserRepository.prototype = new Repository();

UserRepository.prototype.getUserByEmail = getUserByEmail;
UserRepository.prototype.subscribeToCompany = subscribeToCompany;

function getUserByEmail(email, callback) {
	const query = this.model.findOne({email: email});
	query.exec(callback);
}

function subscribeToCompany(userId, companyId, callback) {
	const query = this.model.update({_id: userId}, { $push: { subscribes: companyId } });
	query.exec(callback);
}



module.exports = new UserRepository();
