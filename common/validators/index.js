import moment from "moment";

const moment = require("moment");
const mongoose = require("mongoose");

const Validators = {
  isValidEmail: (email) => {
    var pattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
    return new RegExp(pattern).test(email);
  },

  isValidPhoneNumber: (num) => {
    if (Number.isInteger(num)) {
      num = num.toString();
    }

    let pattern = /^([\+0]91)?\-?[5-9]{1}[0-9]{9}$/g;
    return new RegExp(pattern).test(num);
  },

  isValidZipCode: (zipcode) => {
    var pattern = /^\d{5}(-\d{4})?$/;
    return new RegExp(pattern).test(zipcode);
  },

  convertToObjectIds: (_id) => {
    return mongoose.Types.ObjectId(_id);
  },

  isMongoObjectId: (_id) => {
    return mongoose.Types.ObjectId.isValid(_id);
  },

  isJson: (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },

  isValidPhone: (phone, verifyCountryCode) => {
    var reExp = verifyCountryCode ? /^\+\d{6,16}$/ : /^\d{6,16}$/;
    return reExp.test(phone);
  },

  getWeekOfYear: (params) => {
    return moment().week();
  },

  getMonthOfYear: (params) => {
    return moment().month() + 1;
  },

  validatePincode: (pin) => {
    return /^(\d{4}|\d{6})$/.test(pin);
  },
};

module.exports = Validators;
