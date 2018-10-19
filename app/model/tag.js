'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;
  const Tag = app.model.define('Post', {
    // id: INTEGER,
    name: STRING(20),
  });
  return Tag;
};
