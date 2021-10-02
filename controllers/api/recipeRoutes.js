const router = require('express').Router();
const { route } = require('.');
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

// api/recipe
// sticking with NO S 

// See all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.findAll(
      console.log("yay")
      // include: [
      //   {
      //     model: Recipe,
      //     attributes: ['name'],
      //   },
      // ],
    );
    // Serialize data so the template can read it
    // const cookBook = recipes.map((recipe) => recipe.get({ plain: true }));

    // // Pass serialized data and session flag into template
    // res.render('main', { 
    //   cookBook, 
    //   logged_in: req.session.logged_in 
    // });
    res.render(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});


// add a favorite recipe
router.post('/', async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const RecipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!RecipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(RecipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
