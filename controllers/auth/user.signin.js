const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');
const {MESSAGES} = require("../../constants")

const signin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: MESSAGES.USER_NOT_FOUND });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: MESSAGES.INVALID_PASSWORD });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ message: "Signin successful.", token });
    } catch (error) {
      res.status(500).json({ message: MESSAGES.INTERNAL_SERVER_ERROR });
    }
  };
  
  module.exports = signin