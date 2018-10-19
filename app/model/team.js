'use strict';
module.exports = app => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;
  const Team = app.model.define('Team', {
    name: TEXT,
    profile: STRING(255),
    creater_id: INTEGER,
    avatar: STRING(20),
  });
  Team.associate = function() {
    Team.belongsTo(app.model.User, {
      foreignKey: 'creater_id',
      as: 'creater',
    });
    app.model.User.hasMany(Team);
  };
  return Team;
};
