const express = require('express');
const items = require('./controllers/items');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

items.getItemByQuery(app);
items.getItemById(app);

module.exports = app;