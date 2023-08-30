module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      mobile: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          is: /^[0-9]{10}$/, //Regular expressions เช็คได้กับทุกภาษา
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profileImage: DataTypes.STRING,
      coverImage: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Comment, {
      foreignKey: {
        name: "userId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
    User.hasMany(models.Like, {
      foreignKey: {
        name: "userId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
    User.hasMany(models.Friend, {
      as: "Requester",
      foreignKey: {
        name: "requesterId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
    User.hasMany(models.Friend, {
      as: "Receiver",
      foreignKey: {
        name: "receiverId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
  };
  return User;
};
