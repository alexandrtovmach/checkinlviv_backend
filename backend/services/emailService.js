const nodemailer = require('nodemailer');
const emailConfig = require("../config/mail");
const host = require("../config").host;

class emailService{

    constructor(){
        this.from = emailConfig.defaultSender;
        this.fromName = emailConfig.fromName;

        const smtpOptions = {
            service: emailConfig.service,
            auth: {
                user: emailConfig.user,
                pass: emailConfig.pass
            }
        };

        this.transport = nodemailer.createTransport(smtpOptions);
    }

    send(params, callback){
        if (typeof params !== "object"){
            callback({message: "Params must be object"});
        }
        params.from = `${this.fromName} <${this.from}>`;
        this.transport.sendMail(params, callback);
    }
}

module.exports = new emailService();
