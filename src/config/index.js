const config = {
  /**
   * Your env
   */
  env: process.env.NODE_ENV,

  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'info',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },

  /**
   * G News configs
   */
  gNews: {
    endPoint: process.env.G_NEWS_ENDPOINT,
    apiKey: process.env.G_NEWS_API_KEY,
    version: 'v4',
  },
};

module.exports = config;
