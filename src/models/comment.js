module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      message: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },

    {
      underscored: true,
    }
  );
  Comment.associate = (models) => {
    Comment.hasMany(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
    Comment.belongsTo(models.Post, {
      foreignKey: {
        name: "postId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
  };
  return Comment;
};
