/* eslint-disable no-param-reassign */
import axios from 'axios';

const GH_TOKEN = require('../../../tokens.js');

const headers = { headers: { Authorization: GH_TOKEN.GH_TOKEN } };

const getRelatedProducts = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`, headers).then((results) => {
    callback(results.data);
  });
};

const getItemDetails = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/`, headers).then((productInfo) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/styles`, headers).then((stylesInfo) => {
      productInfo.data.results = stylesInfo.data.results;
      callback(productInfo.data);
    });
  });
};

export default { getRelatedProducts, getItemDetails };
