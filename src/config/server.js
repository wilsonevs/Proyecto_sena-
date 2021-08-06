const express = require ('express');
const path = require ('path');
const dotenv = require ('dotenv');
const bcryptjs = require ('bcryptjs');
const session = require ('express-session');

const app = express ();

app.set('port', process.env.PORT || 3000);
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

dotenv.config({path: path.join(__dirname, '../env/.env')});

app.use('/resources', express.static(path.join(__dirname, '../public')));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

module.exports = app;