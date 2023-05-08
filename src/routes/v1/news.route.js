const express = require('express');
const { cache } = require('../../middlewares/cache');
const validate = require('../../middlewares/validate');
const emiController = require('../../controllers/news.controller');
const {
  newsValidation: { getNews },
} = require('../../validations');

const router = express.Router();
router.route('/').get(validate(getNews), cache(10), emiController.getNewsArticles);
module.exports = router;
