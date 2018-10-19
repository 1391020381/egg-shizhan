'use strict';
module.exports = app => {
  const { TEXT, STRING } = app.Sequelize;
  const Fm = app.model.define('Fm', {
    title: STRING(40),
    image_url: STRING(20),
    audio_url: STRING(20),
    content: TEXT,
    description: STRING(255),
  });
  Fm.associate = function() {
    Fm.belongsToMany(app.model.Tag, {
      through: {
        model: app.model.TagInfo,
        unique: false,
        scope: {
          type: 'fm',
        },
      },
      foreignKey: 'info_id',
      constraints: false,
    });

    app.model.Tag.belongsToMany(Fm, {
      through: {
        model: app.model.TagInfo,
        unique: false,
      },
      foreignKey: 'tag_id',
      constraints: false,
    });
  };
  return Fm;
};
