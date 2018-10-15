'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const S = Sequelize;
    queryInterface.createTable('ImageComment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: S.INTEGER,
      },
      image_id: S.INTEGER,
      content: S.STRING,
      parent_id: S.INTEGER,
      user_id: S.INTEGER,
      created_at: {
        allowNull: false,
        type: S.DATE,
      },
      updated_at: {
        allowNull: false,
        type: S.DATE,
      },
    });
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('ImageComment');
  },
};
