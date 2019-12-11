const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users');

const app = express();

// Body Parser 
// app.use(cors({origins: 'https://localhost:5000', credentials: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DBconfig
const db = require('./config/keys').mongo;

//Connect to mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true})
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));


// Use Routes
app.use('/api', users);

// initiating static files to public pointing to node_modules (to be decalred in .html files)
app.use('/scripts', express.static(__dirname + '/client/node_modules/'));

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));