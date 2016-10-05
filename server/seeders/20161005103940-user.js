'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('User', [
    {
      name: 'User1',
      email: 'User1@email.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()},
    {
      name: 'User2',
      email: 'User2@email.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()},
    {
      name: 'User3',
      email: 'User3@email.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()}
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};
