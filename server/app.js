const express = require('express');
const items = require('./controllers/items');
const cors = require('cors');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

items.getItemByQuery(app);
items.getItemById(app);

module.exports = app;