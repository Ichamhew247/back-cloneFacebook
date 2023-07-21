module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define("like", {}, { underscore: true });
  return Like;
};
