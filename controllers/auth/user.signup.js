const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');
const {MESSAGES} = require("../../constants")

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: MESSAGES.EMAIL_ALREADY_EXISTS });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

module.exports = signup