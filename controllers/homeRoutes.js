const router = require('express').Router();
const { Recipe, User, Comment } = require('../models');
//const withAuth = require('../utils/auth');

// inital login 
router.get('/login', (req, res) => {
  if (!req.session.logged_in) {
    res.render('login');
  } else {
    res.render('menu');
  }
});

//sign up route 
// working
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/login');
    return;
  } else {
    res.render('signup');
  }
});

// logout 
//working
router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/login');
    return;
  } else {
    res.render('signup');
  }
});


// Get all Recipes
// / is menu  
// put back with auth functionailhjdsba complete
router.get('/', async (req, res) => {
  //if not logged in go to login 
  const recipeData = await Recipe.findAll().catch((err) => {
    res.json(err);
  });
  const recipe = recipeData.map((recipes) => recipes.get({ plain: true }));
  res.render('menu', { recipe });
});


// get for single recipe and comments 
router.get('/menu/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findOne({
      where: { id: req.params.id },
      include: User,
    });

    const commentData = await Comment.findAll({
      where: { recipe_id: req.params.id }
    });

    const recipe = recipeData.get({ plain: true });

    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(comments);


    res.render('single-recipe', {
      recipe,
      comments,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;