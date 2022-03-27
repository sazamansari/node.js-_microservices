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
