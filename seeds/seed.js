const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./menu.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData);

  // const recipes = recipeData.map((user) => user.get({plain: true}))
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const recipe = await Recipe.bulkCreate(recipeData);

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
