import moment from "moment";

export const Valiadtors = {
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
    params.currDate = Date.now();
    var year = new Date(parseInt(params.currDate)).getFullYear();
    var month = new Date(parseInt(params.currDate)).getMonth() + 1;
    var date = new Date(parseInt(params.currDate)).getDate();
    return moment(month + "-" + date + "-" + "-" + year, "MM-DD-YYYY").week();
  },

  getMonthOfYear: (params) => {
    params.currDate = Date.now();
    var month = new Date(parseInt(params.currDate)).getMonth() + 1;
    return month;
  },

  validatePincode: (pin) => {
    return /^(\d{4}|\d{6})$/.test(pin);
  },
};
