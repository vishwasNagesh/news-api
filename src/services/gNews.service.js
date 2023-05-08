const { get } = require('../utils/externalApiCalls');
const { gNews } = require('../config');

class GNewsService {
  /**
   * Query for getting news articles
   * @param {Object} filter - Api filter
   * @param {Object} options - Query options
   * @param {number} [options.limit] - Maximum number of results per page (default = 10)
   * @param {number} [options.page] - Current page (default = 1)
   * @returns {Promise<QueryResult>}
   */
  async getArticles(filter, options) {
    const { query } = filter;
    const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
    const URL = `${gNews.endPoint}/${gNews.version}/search?q=${query}&max=${limit}&apikey=${gNews.apiKey}`;
    const result = await get(URL);
    return result.data;
  }
}
module.exports = new GNewsService();
