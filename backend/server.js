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

const whitelist = ['http://gidy.lviv.ua', 'http://localhost:4200']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

// empty arrays don't throw 404 response error
apiResponse.options({
	emptyArrayIsOk: true
});

firebase.init();
mongodb.init();

app.all('*', (req, res, next) => {
	console.log('\n\n===url===\n', req.method, req.url, '\n===url===\n\n')
	next()
})

// app.all('/generate_faked_data', (req, res, next) => {
// 	const initService = require('./services/initService')();
// 	next()
// })

app.use('/langpack', express.static(path.resolve(__dirname + '/../localization')));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const apiRoutes = require('./routes/api/routes')(app);

const config = require('./config');
const server = app.listen(port);

module.exports = app;
