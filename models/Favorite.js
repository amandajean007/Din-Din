// create table user
// (
//     user_id  int identity primary key,
//     -- other user columns
// )

// create table item
// (
//     item_id  int identity primary key,
//     -- other item columns
// )

// create table userfavoriteitem
// (
//     user_id  int foreign key references user(user_id),
//     item_id  int foreign key references item(item_id),
//     -- other information about favoriting you want to capture
// )
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Favorite extends Model {}

Favorite.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_fav_item: {
        type: DataTypes.INTEGER,
        references: {
            foreignKey: item_id
        }
    }
})