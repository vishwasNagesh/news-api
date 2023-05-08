module.exports.load = async function(envPath) {
  try {
    if (!process.env.NODE_ENV || ['development', 'production'].includes(process.env.NODE_ENV)) {
      // eslint-disable-next-line global-require
      require('dotenv').config({
        path: envPath,
      });
    } else {
      // Loading configs from Common Keystore
      const commonConfigKeyPath = '';
      // await loadConfigsFromSSM(commonConfigKeyPath);
    }
  } catch (e) {
    // Deal with the fact the chain failed
    console.log('Error', e);
  }
};

module.exports.loadByPath = async path => {
  if (process.env.NODE_ENV && process.env.NODE_ENV !== 'local') {
    // await loadConfigsFromSSM(path);
  }
};
