import axios from 'axios';

const getRelatedProducts = (id) => axios.get(`/products/${id}/related`);

const getItemDetails = (id) => axios.get(`/products/${id}/details`);

const getRating = (id) => axios.get(`/reviews/meta?id=${id}`);

const getReviews = (id, page, sortBy) => axios.get(`/reviews?page=${page}&count=100&sort=${sortBy}&id=${id}`);

const voteHelpful = (id) => axios.put(`/reviews/${id}/helpful`);

const reportPost = (id) => axios.put(`/reviews/${id}/report`);

const submitReview = (form) => axios.post('/reviews/', form);

// QA

const getQuestions = (id, count) => axios.get(`/qa/questions/${id}&count=${count}`);

const postQuestion = (form) => axios.post('/qa/questions', form);

const addAnswer = (id, form) => axios.post(`/qa/${id}/answers`, form);

const addHelpfulQuestion = (id, endpoint) => axios.put(`qa/${endpoint}/${id}/helpful`);

const reportAnswer = (id) => axios.put(``);

export default {
  getRelatedProducts,
  getItemDetails,
  getRating,
  getReviews,
  voteHelpful,
  reportPost,
  submitReview,
  getQuestions,
  postQuestion,
  addAnswer,
  addHelpfulQuestion,
};
