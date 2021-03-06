module.exports = {
  FIREBASE_databaseURL: process.env.firebase_databaseURL,
  FIREBASE_storageBucket: process.env.firebase_storageBucket,
  FIREBASE_uid: process.env.firebase_uid,
  refName: "checkinlviv-database",
  MONGO_uri: process.env.mongo_uri,
	MONGO_opts: {
    dbname: 'checkinlviv',
		server: { 
			auto_reconnect: true,
			poolSize: 40
		},
    user: process.env.mongo_user,
    pass: process.env.mongo_pass
	}
}
