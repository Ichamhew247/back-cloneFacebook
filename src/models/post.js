module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      message: DataTypes.STRING,
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
    Post.hasMany(models.Comment, {
      foreignKey: {
        name: "postId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
    Post.hasMany(models.Like, {
      foreignKey: {
        name: "postId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
  };
  return Post;
};
