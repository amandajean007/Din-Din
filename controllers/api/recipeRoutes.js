const router = require('express').Router();
const { route } = require('.');
const { Recipe } = require('../../models');

// api/recipe
// See favorite recipes
router.get('/', async (req, res) => {
  try {
    const favorites = await Recipe.findAll
  }
})



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
