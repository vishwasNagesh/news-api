const path = require('path');
const { load } = require('../utils/secrets');

/* eslint-disable global-require */
(async () => {
  try {
    // loading env file
    const envPath = path.join(__dirname, '../../.env');
    await load(envPath);

    // Loading main package
    const app = await require('../app')();
    const exitHandler = () => {
      if (app) {
        app.close(() => {
          console.log('Server closed');
          // process.exit(1);
        });
      } else {
        // process.exit(1);
      }
    };

    const unexpectedErrorHandler = error => {
      console.log('unexpected error handler');
      console.log(error);
      exitHandler();
    };

    process.on('uncaughtException', unexpectedErrorHandler);
    process.on('unhandledRejection', unexpectedErrorHandler);

    process.on('SIGTERM', () => {
      console.log('SIGTERM received');
      // TODO commented below line just to check if the signal termination received then will the app still be working fine
      // if (app) {
      //   app.close();
      // }
    });
  } catch (e) {
    // Deal with the fact the chain failed
    console.log('Error', e);
  }
})();
