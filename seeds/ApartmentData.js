const { Apartment } = require('../models');

const apartmentData = [
  {
    address1: '730 Little Blvd',
    city: 'Tinytown',
    state: 'MA',
    zip: '12345',
    date_added: '2024-01-15 05:00:00',
    rent: '600',
    beds: '2',
    baths: '1',
    rating: '4',
    notes: 'Not really close to transit',
    link: 'http://www.dhjfkdah.com',
    user_id: '1',
    apartment_collection_id: '1'
  },
];

const seedApartment = () => Apartment.bulkCreate(apartmentData);

module.exports = seedApartment;