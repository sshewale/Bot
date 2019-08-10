const bot = require('./bot');

module.exports = (router) => {
  router.use('/users', bot);
};
