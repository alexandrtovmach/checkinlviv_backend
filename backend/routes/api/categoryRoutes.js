const apiResponse = require('express-api-response'),
    categoryRepository = require('../../repositories/categoryRepository'),
    baseUrl = '/api/category/';

module.exports = function (app) {

app.get(baseUrl, function (req, res, next) {
    categoryRepository.getAll(function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.post(baseUrl, function (req, res, next) {
    categoryRepository.add(req.body, function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.put(baseUrl + ':id', function (req, res, next) {
    categoryRepository.update(req.params.id, req.body, function (err, data) {
        console.log(data)
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.delete(baseUrl + ':id', function (req, res, next) {
    categoryRepository.deleteById(req.params.id, function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

};
