/* eslint-disable no-undef */
const validateRegister = (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({
      status: "error",
      message: "Name, email, password and role are required"
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Email and password are required"
    });
  }

  next();
};

module.exports = {
  validateRegister,

};