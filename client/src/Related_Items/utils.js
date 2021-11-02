/* eslint-disable no-param-reassign */
import axios from 'axios';

const TOKEN = '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';
const headers = { headers: { Authorization: TOKEN } };

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
