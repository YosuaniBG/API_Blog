const router = require('express').Router();

router.use('/posts', require('./api/post'));
router.use('/authors', require('./api/author'));

module.exports = router;
