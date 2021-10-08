const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoute = require('./commentRoute');

router.use('/user', userRoutes);
router.use('/comment', commentRoute);

module.exports = router;