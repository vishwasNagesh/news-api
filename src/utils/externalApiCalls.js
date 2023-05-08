const axios = require('axios');

const get = async function(url) {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const post = async function(url, data) {
  try {
    const result = await axios.post(url, data, {
      responseType: 'json',
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  get,
  post,
};
