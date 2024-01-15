const { User } = require('../models');

const userData = [
  {
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'justsomeguy@gmail.com',
    password: 'spiderman123',
  },
  {
    firstName: 'Greg',
    lastName: 'Daniels',
    email: 'ihavetwofirstnames@hotmail.com',
    password: 'David5678',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;