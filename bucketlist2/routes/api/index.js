const router = require('express').Router();
const itemRoutes = require('./items');
const listRoutes = require('./lists');

router
    .use('/items', itemRoutes)
    .use('/lists', listRoutes)

module.exports = router;