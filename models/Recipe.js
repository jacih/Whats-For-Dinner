const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.OBJECT
    },
    ingredients: {
      type: DataTypes.OBJECT,
      allowNull: false
    },
    instructions: {
      type: DataTypes.OBJECT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
    },
    recipe_link: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
);

module.exports = Recipe;