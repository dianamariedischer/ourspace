const sequelize = require("../config/connection");
const { User, ApartmentCollection, Apartment, Comment } = require("../models");

const userData = require("./userData.json");
const apartmentData = require("./ApartmentData.json");
const apartmentCollectionData = require("./ApartmentCollectionData.json");
const commentData = require("./CommentData.json");

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
  };

  await Apartment.bulkCreate(apartmentData, {
    individualHooks: true,
    returning: true,
  });

  await ApartmentCollection.bulkCreate(apartmentCollectionData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
