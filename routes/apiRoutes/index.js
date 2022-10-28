const router = require('express').Router();
const apiRoutes = require('../apiRoutes/apiRoute');

router.use(require('./apiRoute'));

router.use(apiRoutes);

module.exports = router;