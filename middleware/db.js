import mongoose from "mongoose";
const connectToDb = (handler) => async (req, res) => {
  console.log(req.method);
  try {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }

    await mongoose.connect(process.env.MONGO_URI);
    return handler(req, res);
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
