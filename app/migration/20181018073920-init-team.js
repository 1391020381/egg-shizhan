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
    queryInterface.createTable('Team', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: S.INTEGER,
      },
      name: S.STRING(40),
      profile: S.STRING,
      creater_id: S.INTEGER,
      avatar: S.STRING(20),
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
    return queryInterface.dropTable('Team');
  },
};
