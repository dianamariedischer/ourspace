const { ApartmentCollection } = require('../models');

const apartmentCollectionData = [
  {
    title: 'High Rises in Boston with MJ',
    user_id: 1,
  },
  {
    title: 'Philly Solo Living',
    user_id: 1,
  },
  {
    title: 'Burbs',
    user_id: 1,
  },
];

const seedApartmentCollection = () => ApartmentCollection.bulkCreate(apartmentCollectionData);

module.exports = seedApartmentCollection;
