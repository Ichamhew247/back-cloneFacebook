module.exports = (sequelize, Datatypes) => {
  const Friend = sequelize.define(
    "Friend",
    {
      status: {
        type: Datatypes.ENUM("PENDING", "ACCEPTED"),
        allowNull: true,
      },
    },
    { underscored: true }
  );
  Friend.associate = (models) => {
    Friend.belongsTo(models.User, {
      as: "Requester",
      foreignKey: {
        name: "requesterId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
    Friend.belongsTo(models.User, {
      as: "Receiver",
      foreignKey: {
        name: "receiverId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
  };
  return Friend;
};
