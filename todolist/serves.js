// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/demo-2'
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
mongoose.connection.on('open' , ()=>{});



// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));




//controllers

const recipeController = require('./controllers/todo.js')
app.use('/todo',recipeController);

// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});