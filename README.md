
# User-Auth-Microservice

Express.js is a framework of Node.js  for building efficient, scalable Node.js server-side applications. It uses modern JavaScript, is built with JavaScript (preserves compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of Express, but also, provides compatibility with a wide range of other libraries, like e.g. Fastify, allowing for easy use of the myriad third-party plugins which are available.

In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications, giving rise to awesome projects like Angular, React and Vue which improve developer productivity and enable the construction of fast, testable, extensible frontend applications. However, on the server-side, while there are a lot of superb libraries, helpers and tools for Node, none of them effectively solve the main problem - the architecture.

Nest aims to provide an application architecture out of the box which allows for effortless creation of highly testable, scalable, loosely coupled and easily maintainable applications. The architecture is heavily inspired by React.

## Acknowledgements

 - [Express.js](https://expressjs.com/)
 - [Node.js](https://nodejs.org/en/)
 


## Appendix

Any additional information goes here


## Authors

- [@Md Shadab Azam Ansari](https://shadab-azam-ansari.vercel.app/)




[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.




## To Run The Project

To Run The Project

```bash
  npm run dev
```


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shadab-azam-ansari.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shadab1995/)



## Tech Stack

**Server:** Node, Express
### Examples
```jsx
{
  "name": "user-auth-microservice",
  "version": "1.1.0",
  "description": "User Authentication Microservice",
  "main": "server.js",
  "scripts": {
    "start": "nodemon --exec babel-node server.js ",
    "build": "babel server.js — out-file index-compiled.js",
    "server": "nodemon server",
    "dev": "nodemon  --exec babel-node server.js "
  },
  "author": "Shadab Azam Ansari",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "compression": "^1.7.4",
    "config": "^3.3.1",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-validator": "^6.4.0",
    "generate-password": "^1.5.1",
    "gravatar": "^1.8.0",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.24.0",
    "mongoose": "^5.9.6",
    "morgan": "^1.10.0",
    "otp-generator": "^4.0.0",
    "request": "^2.88.2",
    "strategy": "^1.1.1",
    "twilio": "^3.73.1",
    "uuid": "^7.0.3",
    "winston": "^3.3.3"
  },
  "devDependencies": {
    "@babel/core": "^7.13.8",
    "@babel/node": "^7.13.0",
    "@babel/preset-env": "^7.13.8",
    "eslint": "^7.32.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-plugin-import": "^2.23.4",
    "nodemon": "^2.0.2"
  }
}
/>


