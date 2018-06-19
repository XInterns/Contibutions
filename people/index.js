const express = require('express');

const router = express.Router();

const _find = require('./methods/find');
const _get = require('./methods/get');


router.get('/', _get);

router.get('/search/:queryValue', _find);



module.exports = router;
