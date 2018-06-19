const express = require('express');

const router = express.Router();

const _find = require('./methods/find');
const _get = require('./methods/get');
const _tag = require('./methods/tag');

router.get('/', _get);

router.get('/search/:queryValue', _find);

router.get('/tag', _tag);

module.exports = router;