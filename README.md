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

h1 align="center"> <img src= "https://octodex.github.com/images/original.png" width= "40" /> HacktoberFest 2022 Node.js<img src= "https://octodex.github.com/images/original.png" width= "40" /> </h1>




<div align="center">
<img src= "https://external-preview.redd.it/d_6uprRJpBPS9-1ExJsjCWbbrQrHg8V1DxvTmCsSpH0.jpg?width=640&crop=smart&auto=webp&s=c86d4993194a52f9b1e39ccd6a929d532f380bf7" width= "400"/>
</div>
<br>



# Upload Components to be used in future

Use this project to make your first contribution to an open source project on GitHub. Practice making your first pull request to a public repository before doing the real thing!

# What is Hacktoberfest?

Hacktoberfest is a program by Digital Ocean, DEV and Github, where you can easily win a T-Shirt just by making 4 pull requests in the month of October to any open source projects on Github.

## Steps to follow:

### 1. Register for Hacktoberfest

##### https://hacktoberfest.com/

### 2. Add/Fix component

Add or fix the component if you found any issue.

### 3. Create Pull Request:

Once you have completed these steps, you are ready to start contributing by clicking on Create Pull Request.

### 4. Give this Project a Star:

If you liked working on this project, please share this project as much as you can and star this project to help as many people in opensource as you can.


## Note:

1. Don't Create Pull Request to update "readme.md" File.
2. Maintain proper folder structure.
3. In case you need to add an external package, install it by using npm. Don't push the complete package file here


### Steps to run the project
* Fork the repo
* Clone into local
* Run npm install
* Run npm run dev

### Issues to fix:
* Fix all the buttons
* Improve box-shadow in light mode
* Make dark mode as default

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


