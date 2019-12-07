const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route for on Login Page w/o loadDB middleware bcs it needs to check for related DB first in Control Server
// http://localhost:5000/api/


// // User Model
const UserModel = require('../../models/User');

const mongo = require('mongoose');
const conn = require('../../config/keys').mongoURI;


const mongoDB = async (url, email) => {
	const response = await  mongo.connect(conn, {
		useNewUrlParser: true, 
		useUnifiedTopology: true, 
		useCreateIndex: true,
		dbName : url})
	.then( resp => {
		return console.log(`Switched Connectection from CS to CRM-Team ${conn + url}`)
		// console.log(resp)
	}).catch( err => {
		return console.log(err)
	})
}

router.post('/get-team', (req, res, next) => {
	res.status(200).send("Hello World")
});



module.exports = router;