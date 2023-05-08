const express = require('express');
const newsRoute = require('./news.route');
const config = require('../../config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/news',
    route: newsRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach(route => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
