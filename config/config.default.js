'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539571787640_1477';

  // add your config here
  config.middleware = [];
  config.cluster = {
    listen: {
      port: 7002,
      hostname: '127.0.0.1',
    },
  };
  // sequelize
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   prot: 3306,
  //   database: 'miao-dev',
  // };
  return config;
};
