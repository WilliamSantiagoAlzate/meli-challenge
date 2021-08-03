const axios = require('axios');

const apiUrl = 'https://api.mercadolibre.com';

const items = {};
console.log(apiUrl);
items.getItemByQuery = app => {
  app.get('/api/items', (req, res) => {
    axios({ method: 'GET', url: `${apiUrl}/sites/MLA/search?q=${req.query.q}` })
    .then(response => {
      console.log(response);
      res.send(response)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
  });
}

items.getItemById = app => {
  app.get('/api/items/:id', (req, res) => {
    axios({ method: 'GET', url: `${apiUrl}/items/${req.params.id}` })
    .then(response => {
      console.log(response);
      res.send(response)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
  });
}

module.exports = items;