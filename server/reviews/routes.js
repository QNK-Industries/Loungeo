const express = require('express');
const axios = require('axios');
const { reviewURL } = require('../apiconfig.js');
const { GH_TOKEN } = require('../../tokens.js');

const HEADERS = { headers: { Authorization: GH_TOKEN } };

const router = express.Router();

router.get('/', (req, res) => {
  const { page, sort, id } = req.query;
  const url = `${reviewURL}/reviews/?page=${page}&count=100&sort=${sort}&product_id=${id}`;

  axios.get(url, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

router.get('/meta', (req, res) => {
  const { id } = req.query;
  const url = `${reviewURL}/reviews/meta/?product_id=${id}`;

  axios.get(url, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

router.put('/:id/helpful', (req, res) => {
  const url = `${reviewURL}/reviews/${req.params.id}/helpful`;
  axios.put(url, null, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.put('/:id/report', (req, res) => {
  const url = `${reviewURL}/reviews/${req.params.id}/report`;
  axios.put(url, {}, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post('/', (req, res) => {
  const url = `${reviewURL}/reviews/`;

  axios.post(url, req.body, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    }).catch((error) => {
      res.send(error);
    });
});

module.exports = router;
