const express = require('express');

const router = express.Router();

const _find = require('./methods/find');
const _get = require('./methods/get');
const _tag = require('./methods/tag');
const _taginfo=require('./methods/taginfo');

router.get('/', _get);

router.get('/search', _find);

router.get('/tag', _tag);

router.get('/taginfo', _taginfo)

module.exports = router;