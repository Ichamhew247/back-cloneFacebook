module.export = (sequelize, Datatypes) => {
  const Friend = sequelize.define(
    "Friend",
    {
      status: {
        type: Datatypes.ENUM("PENDING", "ACCEPTED"),
      },
    },
    { underscored: true }
  );
  return Friend;
};
