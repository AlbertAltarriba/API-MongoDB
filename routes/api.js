const router = require('express').Router();

const apiInmueblesRouter = require('./api/inmuebles')


router.use('/inmuebles', apiInmueblesRouter);

module.exports = router;