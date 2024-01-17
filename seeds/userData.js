const { User } = require('../models');

const userData = [
  {
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'justsomeguy@gmail.com',
    password: '$2b$10$1FRmI88fcYCIQl58rYFkrOAEg9WSdt04oUHbKrpvjrCyuWmHY/Lga',
  },
  {
    firstName: 'MJ',
    lastName: 'Watson',
    email: 'spidermanluvr@gmail.com',
    password: '$2b$10$1FRmI88fcYCIQl58rYFkrOAEg9WSdt04oUHbKrpvjrCyuWmHY/Lga',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;