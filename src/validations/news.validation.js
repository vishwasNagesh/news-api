const Joi = require('joi');

const getNews = {
  query: Joi.object().keys({
    limit: Joi.number()
      .positive()
      .less(21)
      .integer()
      .required(),
    query: Joi.string().required(),
  }),
};

module.exports = {
  getNews,
};
