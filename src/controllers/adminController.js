/* eslint-disable no-undef */
const adminController = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Welcome to the admin route"
  });
};

module.exports = adminController;