/* eslint-disable no-undef */
const bcrypt = require("bcrypt");

const allUsers = [];

const registerNew = async (req, res) => {


    console.log ('your controller is reached')
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.role
  ) {
    return res.status(400).json({
      status: "error",
      message: "Name, email, password and role are required"
    });
  }

  const existingUser = allUsers.find(
    user => user.email === req.body.email
  );

  if (existingUser) {
    return res.status(409).json({
      status: "error",
      message: "Email already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    process.env.SALT_ROUNDS
  );

  const newUser = {
    id: allUsers.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role
  };

  allUsers.push(newUser);

  console.log(
    `User ${newUser.name} your account was registered successfully`
  );

  return res.status(201).json({
    status: "success",
    message: "User registered successfully"
  });
};

module.exports = {
  registerNew
};