const sequelize = require('../config/connection');
const {  Recipe } = require('../models');

const recipeData = require('./menu.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

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
