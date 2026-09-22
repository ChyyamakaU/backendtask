/* eslint-disable no-undef */

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const allUsers = [];

const registerNew = async (req, res) => {
  const { name, email, password, role } = req.body;

  const existingUser = allUsers.find(
    user => user.email === email
  );

  if (existingUser) {
    return res.status(409).json({
      status: "error",
      message: "This email already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.SALT_ROUNDS)
  );

  const newUser = {
    id: allUsers.length + 1,
    name,
    email,
    password: hashedPassword,
    role
  };

  allUsers.push(newUser);

  console.log(allUsers);

  return res.status(201).json({
    status: "success",
    message: "User registration successful"
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = allUsers.find(
    user => user.email === email
  );

  if (!existingUser) {
    return res.status(401).json({
      status: "error",
      message: "Invalid email or password"
    });
  }

  const passwordMatch = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!passwordMatch) {
    return res.status(401).json({
      status: "error",
      message: "Invalid email or password"
    });
  }

  const token = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
      role: existingUser.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );


  
  return res.status(200).json({
    status: "success",
    message: "Login successful",
    token
  });
};

module.exports = {
  registerNew,
  loginUser
};