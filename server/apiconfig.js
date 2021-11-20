// for Atelier 1.0
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

if (process.env.API_MODE === 'individual') {
  module.exports.productURL = 'insert productURL or baseURL';
  module.exports.qaURL = 'insert qaURL or baseURL';
  module.exports.reviewURL = 'insert reviewURL or baseURL';
}

if (process.env.API_MODE === 'team') {
  module.exports.productURL = 'insert productURL';
  module.exports.qaURL = 'insert qaURL';
  module.exports.reviewURL = 'insert reviewURL';
}

if (process.env.API_MODE === undefined) {
  module.exports.productURL = baseURL;
  module.exports.qaURL = baseURL;
  module.exports.reviewURL = baseURL;
}
