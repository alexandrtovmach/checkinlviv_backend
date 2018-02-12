const apiResponse = require('express-api-response'),
    discountService = require('../../services/discountService'),
    discountRepository = require('../../repositories/discountRepository'),
    userService = require('../../services/userService'),
    baseUrl = '/api/discount/',
    isAdmin = require('../../middleware/isAdminMiddleware'),
    isLoggedIn = require('../../middleware/isLoggedInMiddleware');

module.exports = function (app) {

    app.get(baseUrl, function (req, res, next) {
        discountRepository.getAllDiscounts(function (err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.get(baseUrl + ':id', function (req, res, next) {
        discountRepository.getById(req.params.id, function (err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.get(baseUrl + ':id/confirm', function (req, res, next) {
        discountRepository.update(req.params.id, {isUsed: true}, function (err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.get(baseUrl + 'use/:id', function (req, res, next) {
        discountService.checkDiscountForUse(req.params.id, function (err, data) {
            if (data === 'success') {
                res.redirect('/discount/' + req.params.id);
            }
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.post(baseUrl + ':companyId', function (req, res, next) {
        discountService.generateDiscountByCompany(req.params.companyId, req.body, function (err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.post(baseUrl + 'subscribe/:companyId', function (req, res, next) {
        userService.subscribeOnly(req.params.companyId, req.body, function (err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.put(baseUrl + ':id', function (req, res, next) {
        discountRepository.update(req.params.id, req.body, function (err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

    app.delete(baseUrl + ':id', function (req, res, next) {
        discountRepository.deleteById(req.params.id, function (err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    }, apiResponse);

};
