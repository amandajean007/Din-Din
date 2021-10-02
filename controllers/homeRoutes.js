const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

// inital login 
// 
router.get('/login', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    res.render('login');
  }
});

//sign up route 
// working
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/login');
      return;
  }
  res.render('signup');
}); 


// // Get all Recipes
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const recipeData = await Recipe.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });
//     const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

//     res.render('menu', {
//       recipes,
//       logged_in: req.session.logged_in
//     });


//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get recipe by id
// router.get('/recipe/:id', withAuth, async (req, res) => {
//   try {
//     const recipeData = await Recipe.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const recipe = recipeData.get({ plain: true });

//     res.render('recipe', {
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
//       include: [{ model: Recipe }],
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
