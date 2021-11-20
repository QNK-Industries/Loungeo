const express = require('express');
const axios = require('axios');
const { productURL } = require('../apiconfig.js');
const { GH_TOKEN } = require('../../tokens.js');

const HEADERS = { headers: { Authorization: GH_TOKEN } };

const router = express.Router();

router.get('/', (req, res) => {
  const { page, count } = req.query;
  const url = `${productURL}/products/?page=${page}&count=${count}`;

  axios.get(url, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const url = `${productURL}/products/${id}`;

  axios.get(url, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

router.get('/:id/styles', (req, res) => {
  const { id } = req.params;
  const url = `${productURL}/products/${id}/styles`;

  axios.get(url, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

router.get('/:id/details', (req, res) => {
  const { id } = req.params;
  const url1 = `${productURL}/products/${id}/`;
  const url2 = `${productURL}/products/${id}/styles`;

  axios.get(url1, HEADERS)
    .then((productInfoResponse) => {
      axios.get(url2, HEADERS).then((stylesInfoResponse) => {
        // eslint-disable-next-line no-param-reassign
        productInfoResponse.data.results = stylesInfoResponse.data.results;
        res.status(stylesInfoResponse.status).send(productInfoResponse.data);
      });
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

router.get('/:id/related', (req, res) => {
  const { id } = req.params;
  const url = `${productURL}/products/${id}/related`;

  axios.get(url, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

module.exports = router;
