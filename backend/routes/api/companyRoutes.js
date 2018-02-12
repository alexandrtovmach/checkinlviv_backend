const apiResponse = require('express-api-response'),
    companyService = require('../../services/companyService'),
    companyRepository = require('../../repositories/companyRepository'),
    baseUrl = '/api/company/',
    isAdmin = require('../../middleware/isAdminMiddleware'),
    isLoggedIn = require('../../middleware/isLoggedInMiddleware');

module.exports = function (app) {

app.get(baseUrl, function (req, res, next) {
    companyRepository.getAll(function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.get(baseUrl + ':id', function (req, res, next) {
    companyRepository.getById(req.params.id, function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.get(baseUrl + 'category/:category', function (req, res, next) {
    companyRepository.getByCategory(req.params.category, function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.post(baseUrl, function (req, res, next) {
    companyRepository.add(req.body, function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.put(baseUrl + ':id', function (req, res, next) {
    companyRepository.update(req.params.id, req.body, function (err, data) {
        console.log(data)
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.delete(baseUrl + ':id', function (req, res, next) {
    companyRepository.deleteById(req.params.id, function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

};
