// for Atelier 1.0
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
// for SDC services
const productServiceURL = 'insert your product service URL from SDC here';
const qaServiceURL = 'insert your question and answer service URL from SDC here';
const reviewServiceURL = 'insert your review service URL from SDC here';

if (process.env.API_MODE === 'individual') {
  // fix your individual service URL here and set the rest to baseURL
  module.exports.productURL = 'insert productServiceURL or baseURL';
  module.exports.qaURL = 'insert qaServiceURL or baseURL';
  module.exports.reviewURL = 'insert reviewServiceURL or baseURL';
}

if (process.env.API_MODE === 'team') {
  module.exports.productURL = productServiceURL;
  module.exports.qaURL = qaServiceURL;
  module.exports.reviewURL = reviewServiceURL;
}

if (process.env.API_MODE === undefined) {
  module.exports.productURL = baseURL;
  module.exports.qaURL = baseURL;
  module.exports.reviewURL = baseURL;
}
