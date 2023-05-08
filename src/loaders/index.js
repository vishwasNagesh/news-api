const logger = require('../utils/logger');
const { expressLoader } = require('./express');

const loader = async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  logger.log('info', '✌️ Express loaded');
};

module.exports = loader;
