const Router = require('koa-router');

const router = new Router();
const Ctrl = require('../controllers/bot-controller');

router.get('/', Ctrl.getData);

module.exports = router.routes();
