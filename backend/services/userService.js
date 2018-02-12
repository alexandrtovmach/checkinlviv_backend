const userRepository = require('../repositories/userRepository'),
    companyRepository = require('../repositories/companyRepository')

function UserService() {}

UserService.prototype.findOrCreateByEmail = function(email, callback) {
    userRepository.getUserByEmail(email, (err, user) => {
        if (err) {
            return callback(err)
        } else if (user) {
            return callback(null, user)
        }
        const newUser = {
            email: email,
            createdAt: Date.now(),
            subscribes: []
        }
        userRepository.add(newUser, (error, newUser) => {
            if (error) {
                return callback(error)
            }
            return callback(null, newUser)
        })
    })
}

UserService.prototype.subscribeOnly = function(companyId, body, callback) {
    companyRepository.getById(companyId, (err, company) => {
        if (err) {
            return callback(err)
        } else if (!body.email) {
            return callback({message: 'Not founded email in request object'})
        } else {
            this.findOrCreateByEmail(body.email, (err, user) => {
                userRepository.subscribeToCompany(user._id, company._id, (error, subscribedUser) => {
                    if (err) {
                        return callback(err)
                    }
                    return callback(err, subscribedUser)
                })
            })
        }
    })
}

module.exports = new UserService();
