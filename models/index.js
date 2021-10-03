const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'user_email',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_email'
});



module.exports = { User, Recipe };
