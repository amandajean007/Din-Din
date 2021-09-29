const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./menu.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const recipes = await Recipe.bulkCreate(Data, {
    individualHooks: true,
    returning: true,
  });

  for (const Recipe of recipeData) {
    await Recipe.create({
      ...Recipe,
      recipe_id: recipes[Math.floor(Math.random() * recipes.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
