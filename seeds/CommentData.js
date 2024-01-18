const { Comment } = require('../models');

const commentData = [
  {
    text: 'I would enjoy living here!',
    user_id: 2,
    apartment_id: 1,
  },
  {
    text: 'I would enjoy living here!',
    user_id: 2,
    apartment_id: 3,
  },
  {
    text: 'I think so too',
    user_id: 1,
    apartment_id: 1,
  },
    {
    text: ':)',
    user_id: 2,
    apartment_id: 1,
  },
  {
    text: 'I would enjoy living here!',
    user_id: 2,
    apartment_id: 4,
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;