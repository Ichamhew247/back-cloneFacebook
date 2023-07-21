module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      messege: DataTypes.STRING,
    },
    { underscore: true }
  );
  return Comment;
};
