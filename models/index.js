const User = require('./User');
const Recipe = require('./Recipe');
const Comment = require('./Comment');

User.hasMany(Recipe, {
  foreignKey: 'user_email',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_email'
});

Recipe.hasMany(Comment, {
  foreignKey: 'recipe_id'
});



module.exports = { User, Recipe, Comment };
