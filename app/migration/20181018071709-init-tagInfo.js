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
    queryInterface.createTable('TagInfoS', {
      id: {
        allowNull: false,
        autoIncrememt: true,
        primaryKey: true,
        type: S.INTEGER,
      },
      tag_id: S.INTEGER,
      info_id: S.INTEGER,
      type: S.STRING(40),
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
    queryInterface.createTable('TagInfoS');
  },
};
