const sequelize = require("../config/connection");
const { User, ApartmentCollection, Apartment, Comment } = require("../models");

const seedUser = require("./userData");
const seedApartment = require("./ApartmentData");
const seedApartmentCollection = require("./ApartmentCollectionData");
const seedComment = require("./CommentData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedApartmentCollection();

  await seedApartment();

  await seedComment();

  process.exit(0);
};

seedDatabase();
