'use strict';
module.exports = app => {
  const { INTEGER, STRING, TINYINT } = app.sequelize;
  const Order = app.model.difine('Order', {
    order_id: STRING(48),
    user_id: INTEGER,
    price: INTEGER,
    status: TINYINT,
  });
  Order.associate = function() {
    Order.belongsTo(app.model.User);
    app.model.User.hasMany(Order);
  };
  return Order;
};
