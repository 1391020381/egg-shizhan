'use strict';
module.exports = app => {
  const { INTEGER, STRING, TINYINT } = app.Sequelize;
  const User = app.model.define('User', {
    email: {
      type: STRING(40),
      unique: true,
    },
    password: STRING,
    username: STRING(40),
    weibo: STRING(40),
    team_id: INTEGER,
    receive_remote: {
      type: TINYINT(1),
      defaultValue: 0,
    },
    email_verifyed: {
      type: TINYINT(1),
      defaultValue: 0,
    },
    avatar: STRING(40),
  });
  User.associate = function() {
    app.model.Invitation.belongsTo(app.model.User, {
      foreignKey: 'user_id',
    });
    app.model_User.hasMany(app.model.Invitation, {
      foreignKey: 'user_id',
    });
    app.model.Invitation.belongsTo(app.model.User, {
      foreignKey: 'user_user_id',
      as: 'used_user',
    });
    app.model.User.hasOne(app.model.Invitation, {
      foreignKey: 'use_user_id',
      as: 'my_used_invitaion',
    });
  };
  return User;
};
