const express = require('express');
const logger = require('./utils/logger');
const initLoader = require('./loaders');
const { port } = require('./config');

module.exports = async () => {
  try {
    const app = express();
    logger.log(
      'info',
      `
      ################################################
      🛡️  Starting News Service
      ################################################
    `,
    );
    /**
     * A little hack here
     * Import/Export can only be used in 'top-level code'
     * Well, at least in node 10 without babel and at the time of writing
     * So we are using good old require.
     * */
    await initLoader({ expressApp: app });

    const server = app.listen(port, () => {
      logger.log(
        'info',
        `
      ################################################
      🛡️  Server listening on port: ${port} 🛡️
      ################################################
    `,
      );
    });
    return server;
  } catch (e) {
    // Deal with the fact the chain failed
    logger.log('error', '', e);
    throw e;
  }
};
