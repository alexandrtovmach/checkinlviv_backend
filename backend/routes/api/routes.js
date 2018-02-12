module.exports = function (app) {
    return {
        userRoutes: require('./userRoutes')(app),
        categoryRoutes: require('./companyRoutes')(app),
        discountRoutes: require('./discountRoutes')(app),
        discountRoutes: require('./categoryRoutes')(app),
    };
};
