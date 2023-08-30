const jwt = require("jsonwebtoken");
const { User } = require("../models/");
const createError = require("../utils/create-error");

exports.getUserByToken = async (req, res, next) => {
  try {
    // 1. EXACT HEADERS TO TOKEN
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer")) {
      createError("you are unauthorized 1", 401);
    }
    const [Bearer, token] = authorization.split(" ");
    if (!token) {
      createError("you are unauthorized 2", 401);
    }
    // 2 DECODE TOKEN
    const SECRET_KEY = process.env.SECRET_KEY || "YOUR SECRET MESSAGE";
    const decoded = jwt.verify(token, SECRET_KEY);

    // 3 FIND USER
    const user = await User.findOne({ where: { id: decoded.id } });
    if (!user) {
      createError("you are unauthorized 3", 401);
    }

    // 3.5 OLD TOKEN
    if (decoded.iat * 1000 < new Date(user.lastUpdatedPassword).getTime()) {
      createError("token is outdate", 401);
    }
    // 4. SET USER TO REQ
    req.user = user;
    next();
    //SEND TO NEXT MIDDLEWARE
  } catch (err) {
    next(err);
  }
};
