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

app.get('/qa/questions/:id', (req, res) => {
  const { id } = req.params;
  const { count } = req.query;
  const url = `${URL}/qa/questions/?product_id=${id}`;
  const headers = { params: { count }, ...HEADERS };

  axios.get(url, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/qa/:question_id/answers', (req, res) => {
  const url = `${URL}/qa/questions/${req.params.question_id}/answers`;

  axios.get(url, HEADERS)
    .then((response) => {
      const { results } = response.data;
      res.status(response.status).send(results);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.post('/qa/questions', (req, res) => {
  const { body } = req;
  const url = `${URL}/qa/questions`;

  axios.post(url, body, HEADERS)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post('/qa/:question_id/answers', (req, res) => {
  const { body } = req;
  // eslint-disable-next-line camelcase
  const url = `${URL}/qa/questions/${req.params.question_id}/answers`;

  axios.post(url, body, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error).send(error);
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const url = `${URL}/qa/questions/${req.params.question_id}/helpful`;
  axios.put(url, null, HEADERS)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const url = `${URL}/qa/answers/${req.params.answer_id}/helpful`;

  axios.put(url, {}, HEADERS)
    .then(({ status, body }) => {
      res.status(status).send(body);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  const url = `${URL}/qa/questions/${req.params.question_id}/report`;

  axios.put(url, null, HEADERS)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.status(error.status).send(error);
    });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  const url = `${URL}/qa/answers/${req.params.answer_id}/report`;

  axios.put(url, null, HEADERS)
    .then((response) => {
      res.status(204).send(response);
    })
    .catch((error) => {
      res.status(204).send(error);
    });
});

// remove this comment

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
