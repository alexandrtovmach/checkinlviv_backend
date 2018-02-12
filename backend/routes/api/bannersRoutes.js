const apiResponse = require('express-api-response'),
    bannersRepository = require('../../repositories/bannersRepository'),
    baseUrl = '/api/banners/';

module.exports = function (app) {

app.get(baseUrl, function (req, res, next) {
    bannersRepository.getAll(function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.post(baseUrl, function (req, res, next) {
    bannersRepository.add(req.body, function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.put(baseUrl + ':id', function (req, res, next) {
    bannersRepository.update(req.params.id, req.body, function (err, data) {
        console.log(data)
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

app.delete(baseUrl + ':id', function (req, res, next) {
    bannersRepository.deleteById(req.params.id, function (err, data) {
        res.data = data;
        res.err = err;
        next();
    });
}, apiResponse);

};
