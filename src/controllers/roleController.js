/* eslint-disable no-undef */

const admin = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Welcome admin",
    name: req.user.name,
    email: req.user.email
  });
};

const user = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Welcome user",
    name: req.user.name,
    email: req.user.email
  });
};

module.exports = {
  admin,
  user
};