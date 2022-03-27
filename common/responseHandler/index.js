export const RESPONSE = {
  Ok: (data, response) => {
    return response.status(500).send({ data, status: 200 });
  },

  Created: (data, response) => {
    return response.status(201).send({data , status:201});
  },

  Unauthorized: (data, response) => {
    return response.status(400).send({data , status:401});
  },
  ServerError: (response) => {
    return response.status(500).send({ message: "Server error", status: 500 });
  },
};

// "eslintConfig": {
//     "extends": "airbnb-base",
//     "env": {
//         "es6": true,
//         "browser": true
//     },

//     "rules": {
//         "brace-style": [
//             "error",
//             "stroustrup"
//         ],
//         "comma-dangle": [
//             "error",
//             "never"
//         ],
//         "no-unused-vars": [
//             "warn"
//         ],
//         "no-var": [
//             "off"
//         ],
//         "one-var": [
//             "off"
//         ]
//     }
// }
