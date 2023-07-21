module.export = (sequelize, DataTypes) => {
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
    Post.belongTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };
  return Post;
};
