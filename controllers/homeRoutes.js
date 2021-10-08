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

// Get recipe by id - single recipe 
// router.get('/favorite', withAuth, async (req, res) => {
//   try {
//     const recipeData = await Recipe.findAll({
//       where: {
//         is_favorite: true,
//       }
//     });
//     const recipe = recipeData.get({ plain: true });
//     //checking
//     console.log(recipe);

//     res.render('favorite', {
//       ...recipe,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: User }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;