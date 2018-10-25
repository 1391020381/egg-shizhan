'use strict';

// had enabled by egg
// exports.static = true;
exports.sequelize = {
  enabled: true,
  package: 'egg-sequelize',
};
exports.flash = {
  enabled: true,
  package: 'egg-msg-flash',
};

exports.validator = {
  enable: true,
  package: 'egg-y-validator',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
}
;
