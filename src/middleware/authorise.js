/* eslint-disable no-undef */
const authorization = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      status: "error",
      message: "Access forbidden"
    });
  }

  next();
};

module.exports = authorization;