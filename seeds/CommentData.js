const { Comment } = require('../models');

const commentData = [
  {
    text: 'I would enjoy living here!',
    user_id: 1,
    apartment_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;