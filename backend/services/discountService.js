const discountRepository = require('../repositories/discountRepository'),
    companyRepository = require('../repositories/companyRepository'),
    userRepository = require('../repositories/userRepository'),
    userService = require('./userService'),
    emailService = require('./emailService'),
    QRCode = require('qrcode'),
    host = require('../config').host;

function DiscountService() {}

DiscountService.prototype.checkDiscountForUse = function(discountId, callback) {
    discountRepository.getNotUsedDiscountById(discountId, (err, discount) => {
        if (err) {
            return callback(err)
        } else if (!discount.length) {
            return callback({message: 'This discount is no longer valid'})
        } else {
            console.log(discount)
            callback(null, 'success')
        }
    })
}

DiscountService.prototype.generateDiscountByCompany = function(companyId, body, callback) {
    companyRepository.getById(companyId, (err, company) => {
        if (err) {
            return callback(err)
        } else if (!company.isMarkedCheckInLviv) {
            return callback({message: 'Not founded discount in this company'})
        } else if (!body.email) {
            return callback({message: 'Not founded email in request object'})
        } else {
            const discountObj = {
                email: body.email,
                createDate: Date.now(),
                isUsed: false,
                company: company._id
            }
            userService.findOrCreateByEmail(body.email, (err, user) => {
                userRepository.subscribeToCompany(user._id, company._id)
            })
            discountRepository.add(discountObj, (err, discount) => {
                if (err) {
                    return callback(err)
                }
                
                const discountUrl = `${host.hostAddress}/api/discount/use/${discount._id}`;
                
                QRCode.toFile(`./resources/qr/${discount._id}.png`, discountUrl, {}, function (err) {
                    if (err) {
                        return callback(err)
                    }
                    emailService.send(
                        {
                            to: body.email,
                            subject: "Your discount from CheckInLviv is already ✅",
                            html: 
                            `
                                <div style="max-width: 500px;
                                    min-width: 300px;
                                    margin: auto">
                                    <a href="${host.hostAddress}" 
                                        style="display: block; 
                                            width: 100%; 
                                            height: 100px; 
                                            min-height: 60px; 
                                            background-image: url('http://d.zaix.ru/53SP.png');
                                            background-repeat: no-repeat;
                                            background-size: 100%;">
                                    </a>
                                
                                    <div style="
                                        width: 90%;
                                        padding: 0 5%;
                                        font-size: 20px;
                                        background-image: url('http://d.zaix.ru/593X.png');
                                        background-repeat: no-repeat;
                                        background-size: 60%;
                                        background-position: center top;">
                                
                                        <b>Congratulations!</b>
                                
                                        <p>This is your discount in the company ${company.name.en}, from the service CheckinLviv.</p>
                                            
                                        <p><b>How it works?</b></p>
                                        <ul>
                                            <li>When you use the services of this company, show the service personnel this QR-code.</li>
                                            <li>He must scan it for verification, and receive confirmation from our service.</li>
                                            <li>If the staff does not have the option to scan the QR-code, follow the link manually and confirm the use of the discount.</li>
                                        </ul>
                                            <b>Attention!</b> <i>One discount is valid only once, but you can make out new ones - just go to our service and repeat the operation of the discount order.</i>
                                        </p>
                                
                                        <h2 style="text-align: center;">Show this and get 10% cacheback!!!</h2>
                                        <img style="width: 300px;
                                                height: 300px; 
                                                margin: auto;"
                                            src="${host.hostAddress}/resources/qr/${discount._id}.png" alt="You used this discount"
                                        ></img>
                                
                                        <p>...or follow this
                                            <a href="${discountUrl}"
                                                style="
                                                background-color: #f9e7b9;
                                                color: #503b27">
                                                link
                                            </a>
                                        </p>
                                    </div>
                                    <div style="display: block; 
                                            width: 100%; 
                                            height: 100px; 
                                            max-height: 95px; 
                                            min-height: 57px; 
                                            background-image: url('http://d.zaix.ru/53T4.png');
                                            background-position: bottom;
                                            background-repeat: no-repeat;
                                            background-size: 100%;">
                                    </div>
                                </div>
                            `
                        },
                        (err, data) => {
                            if (err) return callback(err);
                            if (data.rejected.length == 0) {
                                data.status = 'ok';
                            }
                            callback(null, data);
                        }
                    );
                })
                
                callback(null, { discountUrl })
            })
        }
    })
}

module.exports = new DiscountService();
