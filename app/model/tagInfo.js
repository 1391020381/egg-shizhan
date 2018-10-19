'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.sequelize;
  const TagInfo = app.model.define('TagInfo', {
    tag_id: INTEGER,
    info_id: INTEGER,
    type: STRING(10),
  });
  TagInfo.associate = function() {
    app.model.Image.belongsToMany(app.model.Tag, {
      through: {
        model: TagInfo,
        unique: false,
        scope: {
          type: 'image',
        },
      },
      foreignKey: 'info_id',
      constraints: false,
    });
    app.model.Tag.belongsToMany(app.model.Image, {
      through: {
        model: TagInfo,
        unique: false,
      },
      foreignKey: 'tag_id',
      constraints: false,
    });
  };
  return TagInfo;
};
