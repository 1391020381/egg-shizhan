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
    queryInterface.createTable('Post', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: S.INTEGER,
      },
      title: S.STRING(40),
      description: S.STRING(255),
      content: S.TEXT,
      view: S.INTEGER,
      category_id: S.INTEGER,
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
    queryInterface.dropTable('Post');
  },
};
