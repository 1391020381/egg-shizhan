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
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: S.INTEGER,
      },
      email: {
        type: S.STRING(40),
        unique: true,
      },
      password: S.STRING,
      username: S.STRING(40),
      weibo: S.STRING(40),
      weixin: S.STRING(40),
      team_id: S.INTEGER,
      receive_remote: S.TINYINT(1),
      email_verifyed: S.TINYINT(1),
      avatar: S.STRING(40),
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
    return queryInterface.dropTable('Users');
  },
};
