/* eslint-disable no-param-reassign */
// Will consolidate to one utils file eventually, dont @ me
import axios from 'axios';

const GH_TOKEN = require('../../../tokens.js');

const headers = { headers: { Authorization: GH_TOKEN.GH_TOKEN } };

const getRating = (id, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${id}`, headers).then((results) => {
    callback(results.data);
  });
};

export default { getRating };
