const User = require('./User');
const ApartmentCollection = require('./ApartmentCollection');
const Apartment = require('./Apartment');
const Comment = require('./Comment')

User.hasMany(ApartmentCollection, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

ApartmentCollection.belongsTo(User, {
  foreignKey: 'user_id'
});

ApartmentCollection.hasMany(Apartment, {
  foreignKey: 'apartment_collection_id'
});

Apartment.belongsTo(ApartmentCollection, {
  foreignKey: 'apartment_collection_id'
});

Apartment.belongsTo(User, {
  foreignKey: 'user_id'
});

Apartment.hasMany(Comment, {
  foreignKey: 'apartment_id'
});

Comment.belongsTo(Apartment, {
  foreignKey: 'apartment_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, ApartmentCollection, Apartment, Comment };
