const axios = require('axios');

const apiUrl = 'https://api.mercadolibre.com';

const items = {};
console.log(apiUrl);
items.getItemByQuery = app => {
  app.get('/api/items', async (req, res) => {
    try {
      const response = await axios({ method: 'GET', url: `${apiUrl}/sites/MLA/search?q=${req.query.q}` });
      const responseDate = response.data
      const data = {
        author: {
          name: 'William Santiago',
          lastname: 'Alzate Barriga'
        },
        items: responseDate.results.map(item => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: Math.round(item.price),
            decimals: item.price
          },
          picture: item.thumbnail,
          condition: item.condition,
          'free_shipping': item.shipping.free_shipping
        }))
      }
      res.send(data)
    } catch (error) {
      res.send('error: ' + err)
    }
  });
}

items.getItemById = async app => {
  app.get('/api/items/:id', async (req, res) => {
    try {
      const response = await axios({ method: 'GET', url: `${apiUrl}/items/${req.params.id}` });
      const responseData = response.data;
      const responseDescription = await axios({ method: 'GET', url: `${apiUrl}/items/${req.params.id}/description` });
      const responseDataDescription = responseDescription.data;
      
      const data = {
        author: {
          name: 'William Santiago',
          lastname: 'Alzate Barriga'
        },
        item: {
          id: responseData.id,
          title: responseData.title,
          price: {
            currency: responseData.currency_id,
            amount: Math.round(responseData.price),
            decimals: responseData.price
          },
          picture: responseData.thumbnail,
          condition: responseData.condition,
          free_shipping: responseData.shipping.free_shipping,
          sold_quantity: responseData.sold_quantity,
          description: responseDataDescription.plain_text
        }
      }
      res.send(data)
    } catch (error) {
      res.send('error: ' + err)
    }
  });
}

module.exports = items;