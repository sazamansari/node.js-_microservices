const CONSTANTS = {
  API_URI: "/api/v1",
  MESSAGES: {
    KEY_CANT_EMPTY: "{{key}} cannot be empty",
    KEY_LENGTH_EXCEEDED:
      "{{key}} length should cannot exceed {{length}} characters",
    INVALID_PINCODE: "Enter a valid Pincode having only 6 digits",
    KEY_MUST_BE_ARRAY: "{{key}} must be an array",
    INTERNAL_SERVER_ERROR: "Please try after some time.",
    TOKEN_GENERATE_EXCEPTION: "Error while generating access token.",
    INVALID_EMAIL: "Please fill valid email address.",
    INVALID_PASSWORD:
      "Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.",
    VALIDATION_ERROR: "Validation error.",
    UNAUTHORIZED_ACCESS_EXCEPTION: "Unauthorized access.",
    INVALID_PHONE: "Please fill valid phone number.",
  },
};

export default CONSTANTS;
