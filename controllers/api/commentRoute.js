const router = require('express').Router();
const { Comment } = require('../../models');

// api/comment

// get all comments 
    // for back end 
    
// post comment 
router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id;
        const commentData = await Comment.create(req.body)
        res.status(200).json({commentData, message:"Comment created"});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;