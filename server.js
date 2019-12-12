const express = require('express');
const app = express();
// const http = require('http').createServer(app);
const bodyParser = require('body-parser');
var admin = require('firebase-admin');
var seviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
	credential: admin.credential.cert(seviceAccount),
	databaseURL: 'https://co321project-e273b.firebaseio.com'
});

var db = admin.database();
var ref = db.ref("test");
var enRef = ref.child("EndNodes");

app.use(bodyParser.json({exteded: false}));

app.get('/', (req, res) => {
	console.log("Hello, This is BE Server");
	res.send("Hello, This is BE Server");
});

app.get('/test', (req, res) => {
	console.log("Hello, This is BE Server");
	res.send("Success We Received");
});

app.post('/feed', (req,res) => {

	var relayNode;
	var endNode;
	var temp;
	var humid;
	var pres;
	var stab;
	var epoch;
	var lati;
	var long;

	// req.body.forEach(element => {
	// 	relayNode = element.rnID;
	// 	endNode = element.enID;
	// 	temp = element.tem;
	// 	humid = element.humid;
	// 	pres = element.pres;
	// 	stab = element.Stab;
	// 	epoch = element.epoch;

	// 	if( element.lat ){
	// 		lati = element.lat;
	// 	}else if( element.lng ){
	// 		long = element.lng;
	// 	}

	// });

	relayNode = req.body.rnID;
	endNode = req.body.enID;
	temp = req.body.tem;
	humid = req.body.humid;
	pres = req.body.pres;
	stab = req.body.Stab;
	epoch = req.body.epoch;

	// console.log(req.body);
	// var refReading = db.ref("Readings/"+relayNode+"/"+endNode+"/"+epoch);
	// refReading.set({
	// 	Temperature: temp,
	// 	Humidity: humid,
	// 	Pressure: pres,
	// 	Stability: stab
	// });

	// if( lati && long ){
	// 	var refReading = db.ref("RelayNodes/"+relayNode+"/Coordinates");
	// 	refReading.set({
	// 		latitude: lati,
	// 		longitude: lng,
	// 	});
	// }
	res.send("Success");

	// if( stab === "Not Stable" ){
	// 	var refReading = db.ref("https://co321project-e273b.firebaseio.com/notifications/lnhh0rXwx6RXca516WzDIipVxQi1/en1001");
	// 	refReading.set({
	// 		notified: false,
	// 		problem: "Stability",
	// 		read:false
	// 	});
	// }

	// if( parseInt(temp, 10) < 20 || parseInt(temp, 10) > 30 ){
	// 	var refReading = db.ref("https://co321project-e273b.firebaseio.com/notifications/lnhh0rXwx6RXca516WzDIipVxQi1/en1001");
	// 	refReading.set({
	// 		notified: false,
	// 		problem: "Stability",
	// 		read:false
	// 	});
	// }

});

app.listen(process.env.PORT || 8000, () => {
	console.log(`listening on *:${process.env.PORT}`);
});	