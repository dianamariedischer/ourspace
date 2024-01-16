const { ApartmentCollection } = require('../models');

const apartmentCollectionData = [
  {
    title: 'Apartment Search with MJ',
    user_id: 1,
  },
  {
    title: 'The Hive',
    user_id: 1,
  },
  {
    title: 'House Hunt w/ Patrick and Spongebob',
    user_id: 1,
  },
];

const seedApartmentCollection = () => ApartmentCollection.bulkCreate(apartmentCollectionData);

module.exports = seedApartmentCollection;
