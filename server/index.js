const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { GH_TOKEN } = require('../tokens.js');
const { outfitData } = require('./clientOutfit.js');

const app = express();
const PORT = 3000 || process.env.PORT;
const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
const HEADERS = { headers: { Authorization: GH_TOKEN } };

app.use(express.static('./client'));
app.use(express.json());
app.use(cors());

const customerOutfit = outfitData;

// Products Service
const productsRoutes = require('./products/routes.js');

app.use('/products', productsRoutes);

// Reviews Service
const reviewsRoutes = require('./reviews/routes.js');

app.use('/reviews', reviewsRoutes);

// Questions Service
const questionsRoutes = require('./questions/routes.js');

app.use('/qa', questionsRoutes);

// Atelier 1.0 Service

app.get('/myoutfit', (req, res) => {
  res.status(200).send(customerOutfit);
});

app.post('/myoutfit/add', (req, res) => {
  if (!customerOutfit[req.body.id]) {
    customerOutfit[req.body.id] = req.body;
    res.status(201);
  } else {
    res.status(400);
  }
});

app.post('/myoutfit/delete', (req, res) => {
  if (customerOutfit[req.body.id]) {
    delete customerOutfit[req.body.id];
    res.status(200);
  } else {
    res.status(400);
  }
});

app.get('/cart', (req, res) => {
  const url = `${URL}/cart`;

  axios.get(url, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.post('/cart', (req, res) => {
  const data = req.body;
  // eslint-disable-next-line camelcase
  const url = `${URL}/cart`;

  axios.post(url, data, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error).send(error);
    });
});

app.listen(PORT, () => {
  // console.log('Server listening on port:', `${PORT}`);
});
