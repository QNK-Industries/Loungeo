/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
// Will consolidate to one utils file eventually, dont @ me
import axios from 'axios';

const { GH_TOKEN, IMGUR_CLIENT } = require('../../../tokens.js');

const headers = { headers: { Authorization: GH_TOKEN } };
/* const imgurHeader = {
  headers: {
    Authorization: `Client-ID ${IMGUR_CLIENT}`,
    'Content-type': 'application/octet-stream',
    'X-Goog-Upload-Content-Type':
    referrer: '',
  },
}; */

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

const submitReview = (form) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/', form, headers);
};

/* const submitPhoto = (form, callback) => {
  console.log(form.getAll('image'));
  console.log(form.values());
  axios.post('https://api.imgur.com/3/image/', form, imgurHeader).then((res) => callback(res)).catch(err => console.log(err.response));
}; */

export default { getRating, getReviews, voteHelpful, reportPost, submitReview };
