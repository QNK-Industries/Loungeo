/* eslint-disable object-curly-newline */
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

const getReviews = (id, page, sortBy, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?page=${page}&count=100&sort=${sortBy}&product_id=${id}`, headers).then((results) => {
    callback(results.data);
  });
};

const voteHelpful = (id) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${id}/helpful`, {}, headers);
};

const reportPost = (id) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${id}/report`, {}, headers);
};

export default { getRating, getReviews, voteHelpful, reportPost };
