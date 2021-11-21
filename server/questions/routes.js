const express = require('express');
const axios = require('axios');
const { qaURL } = require('../apiconfig.js');
const { GH_TOKEN } = require('../../tokens.js');

const HEADERS = { headers: { Authorization: GH_TOKEN } };

const router = express.Router();

router.get('/questions/:id', (req, res) => {
  const { id } = req.params;
  const { count } = req.query;
  const url = `${qaURL}/qa/questions/?product_id=${id}`;
  const headers = { params: { count }, ...HEADERS };

  axios.get(url, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/:question_id/answers', (req, res) => {
  const url = `${qaURL}/qa/questions/${req.params.question_id}/answers`;

  axios.get(url, HEADERS)
    .then((response) => {
      const { results } = response.data;
      res.status(response.status).send(results);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

router.post('/questions', (req, res) => {
  const { body } = req;
  const url = `${qaURL}/qa/questions`;

  axios.post(url, body, HEADERS)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post('/:question_id/answers', (req, res) => {
  const { body } = req;
  // eslint-disable-next-line camelcase
  const url = `${qaURL}/qa/questions/${req.params.question_id}/answers`;

  axios.post(url, body, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error).send(error);
    });
});

router.put('/questions/:question_id/helpful', (req, res) => {
  const url = `${qaURL}/qa/questions/${req.params.question_id}/helpful`;
  axios.put(url, null, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.put('/answers/:answer_id/helpful', (req, res) => {
  const url = `${qaURL}/qa/answers/${req.params.answer_id}/helpful`;

  axios.put(url, {}, HEADERS)
    .then(({ status, body }) => {
      res.status(status).send(body);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.put('/questions/:question_id/report', (req, res) => {
  const url = `${qaURL}/qa/questions/${req.params.question_id}/report`;

  axios.put(url, null, HEADERS)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.status(error.status).send(error);
    });
});

router.put('/answers/:answer_id/report', (req, res) => {
  const url = `${qaURL}/qa/answers/${req.params.answer_id}/report`;

  axios.put(url, null, HEADERS)
    .then((response) => {
      res.status(204).send(response);
    })
    .catch((error) => {
      res.status(204).send(error);
    });
});

module.exports = router;
