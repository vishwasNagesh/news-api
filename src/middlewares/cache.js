const NodeCache = require('node-cache');

const myCache = new NodeCache();

const cache = duration => (req, res, next) => {
  const key = `__express__${req.originalUrl}` || req.url;
  const cachedBody = myCache.get(key);
  if (cachedBody) {
    res.send(JSON.parse(cachedBody));
  } else {
    res.sendResponse = res.send;
    res.send = body => {
      myCache.set(key, body, duration * 1000);
      res.sendResponse(body);
    };
    next();
  }
};
module.exports = { cache };
