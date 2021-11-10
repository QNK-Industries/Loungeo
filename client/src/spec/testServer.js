/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';

const {
  details,
  reviews,
  reviewsMeta,
  productStyles,
  mainProduct,
} = require('./JSONdata/allData.js');

const server = setupServer(
  // getItemDetails
  rest.get('/products/:id/details', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(details),
  )),
  // getItemDetails
  rest.get('/products/:id', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(mainProduct),
  )),
  // getRelatedProducts
  rest.get('/products/:id/related', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      61576,
      61577,
      61578,
      61581,
      61583,
      61584,
    ]),
  )),
  // getItemStyles
  rest.get('/products/:id/styles', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(productStyles),
  )),
  // getRating
  rest.get('/reviews/meta/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(reviewsMeta),
  )),
  // getReviews
  rest.get('/reviews/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(reviews),
  )),
);

export default server;
