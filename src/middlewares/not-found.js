//middlewares สำหรับ path ที่หาไม่เจอ

module.exports = (req, res) => {
  //   throw new Error("intentional throw error");
  res.status(404).json({ message: "resource not found on this server" });
};
