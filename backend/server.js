const bodyParser = require('body-parser'),
	context = require('./units/context'),
	express = require('express'),
	path = require('path'),
	cors = require('cors'),
	cookieParser = require('cookie-parser'),
	apiResponse = require('express-api-response'),
	dotenv = require('dotenv').config(),
	firebase = require('./db/firebase'),
	mongodb = require('./db/mongodb'),
	port = 4000;

const app = express();
app.use(cors({
	origin: 'http://gidy.lviv.ua'
}))
// empty arrays don't throw 404 response error
apiResponse.options({
	emptyArrayIsOk: true
});

firebase.init();
mongodb.init();

app.all('*', (req, res, next) => {
	if (!req.url.includes('/dist')) {
	  console.log('\n\n===url===\n', req.url, '\n===url===\n\n')
	}
	next()
})

// app.all('/generate_faked_data', (req, res, next) => {
// 	const initService = require('./services/initService')();
// 	next()
// })


app.use('/dist', express.static(path.resolve(__dirname + '/../dist')));
app.use('/resources', express.static(path.resolve(__dirname + '/../resources')));
app.use('/langpack', express.static(path.resolve(__dirname + '/../localization')));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const apiRoutes = require('./routes/api/routes')(app);
const viewRoutes = require('./routes/view/routes')(app);

const config = require('./config');
const server = app.listen(port);

module.exports = app;
