const { Op } = require("sequelize");

const { User } = require("../models");

exports.getUserByEmailOrMobile = (emailOrMobile) =>
  // SELECT * FROM users WHERE email = emailOrMobile OR mobile = emailOrMobile
  User.findOne({
    where: {
      [Op.or]: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
    },
  });

exports.createUser = (user) => User.create(user);

exports.getUserById = (id) => User.findByPk(id);
