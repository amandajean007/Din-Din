const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favRoutes = require('./favRoutes');
const commentRoute = require('./comment');

router.use('/user', userRoutes);
router.use('/recipe', favRoutes);
router.use('/comment', commentRoute);

module.exports = router;