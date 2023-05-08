const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { gNewsService } = require('../services');

const getNewsArticles = catchAsync(async (req, res) => {
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const filter = pick(req.query, ['query']);
  const results = await gNewsService.getArticles(filter, options);
  if (!(results && results.articles && results.articles.length)) {
    throw new ApiError(httpStatus.NOT_FOUND, 'resources not found');
  }
  res.send(results.articles);
});

module.exports = {
  getNewsArticles,
};
