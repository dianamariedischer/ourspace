const sequelize = require('../config/connection');
const { User, Project, Apartment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const apartmentData = require('./ApartmentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project, // copies all key-value pairs to new data record
      user_id: users[Math.floor(Math.random() * users.length)].id,
      // user_id: users[0].id,$ $
    });
  }

  process.exit(0);
};

seedDatabase();
