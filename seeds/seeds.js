const sequelize = require('../config/connection');
// console.log('1');
const { User } = require('../models');
const userData = require('./userData.json');

const recipeData = require('./recipeData');
// const recipeSeeding = recipeData.recipeSeeding;
const altrecipeSeed = recipeData.altrecipeSeed;

const mealData = require('./mealData');
const mealSeeding = mealData.seedMeals;

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced');
  
  mealSeeding();
  altrecipeSeed();
  // commented out due to how buggy scraper was; for seeding on heroku.
  // recipeSeeding();
  
  console.log('meals seeded')

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('users seeded');

  process.exit(0);
};

seedAll();