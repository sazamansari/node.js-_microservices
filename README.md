<img src="https://github.com/sazamansari/node.js-_microservices/blob/main/user.png"/>
 <hr></hr>
<p align="center">
  <samp>
# User-Auth-Microservice

Express.js is a framework of Node.js  for building efficient, scalable Node.js server-side applications. It uses modern JavaScript, is built with JavaScript (preserves compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Node.js makes use of Express, but also, provides compatibility with a wide range of other libraries, like e.g. Moongoose, allowing for easy use of the myriad third-party plugins which are available.

In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications, giving rise to awesome projects like Angular, React and Vue which improve developer productivity and enable the construction of fast, testable, extensible frontend applications. However, on the server-side, while there are a lot of superb libraries, helpers and tools for Node, none of them effectively solve the main problem - the architecture.

User_Auth Microservices aims to provide an application architecture out of the box which allows for effortless creation of highly testable, scalable, loosely coupled and easily maintainable applications. The architecture is heavily inspired by Node.js.

## Acknowledgements

 - [Express.js](https://expressjs.com/)
 - [Node.js](https://nodejs.org/en/)
 


## INSTALL

locally, usually for use as a module:

```bash
npm i user-auth-microservice
```


## Authors

- [@Md Shadab Azam Ansari](https://md-shadab-azam-ansari.vercel.app/)


## License

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

## Mongooose Connect 

config/db.js 

```jsx
import mongoose from "mongoose";

const connectDB = async () => {
  let uri = process.env.MONGO_URI;

  try {
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .catch((error) => {
        console.log("connection in error:::", error);
      });

        console.log("mongo DB connected");


      mongoose.set('debug', function(collectionName, method, query, doc, options) {

        console.log(collectionName + '.' + method, JSON.stringify(query), doc)
    
        // log.info({
        //     dbQuery: set
        // });
    });

  } catch (e) {
    console.error(e, "error");
  } finally {
    // await client.close();
  }
};

export default connectDB;
/>

#### Get all items


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

**Server:** Node.js, Express.js Auth, JwToken
### Examples
```jsx
import CONSTANTS from '../constants/index.js';

import UserRoutes from '../modules/user/user.routes'

const routes = (app)=>{
   
app.use(`${CONSTANTS.API_URI}/user`,UserRoutes);

// console.log(app , "::dddddddddd")
}
export default routes;
/>


