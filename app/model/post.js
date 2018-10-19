'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Post = app.model.define('Post', {
    id: INTEGER,
    title: STRING(40),
    description: STRING(255),
    content: TEXT,
    view: INTEGER,
    category_id: INTEGER,
    user_id: INTEGER,
  });
  Post.associate = function() {
    // app.model.Category.hasMany(Post);
    // app.model.User.hasMany(Post);
    Post.belongsTo(app.model.Category);
    app.model.Category.hasMany(Post);
  };
  return Post;
};
