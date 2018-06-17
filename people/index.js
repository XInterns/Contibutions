const express = require('express');

const router = express.Router();
const middleware = require('./middleware');

const _find = require('./methods/find');
const _get = require('./methods/get');
const _tag = require('./methods/tag');


router.get('/', middleware, _get);

router.get('/search/:queryValue', _find);

router.get('/tag', _tag);



module.exports = router;