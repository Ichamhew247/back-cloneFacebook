const jwt = require("jsonwebtoken");

exports.sign = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });

exports.verify = (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  return payload;
};

//ตอนเรา sign เราใส่ payload เข้าไป พร้อมกับวันหมดอายุ
//ตอน verify ถ้าสำเร็จ มันจะคืนค่า payload ให้เรา
