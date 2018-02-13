module.exports = function (app) {
    return {
        userRoutes: require('./userRoutes')(app),
        companyRoutes: require('./companyRoutes')(app),
        discountRoutes: require('./discountRoutes')(app),
        categoryRoutes: require('./categoryRoutes')(app),
        bannersRoutes: require('./bannersRoutes')(app),
    };
};
