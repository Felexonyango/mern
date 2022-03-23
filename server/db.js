const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://DevConnector:DevConnector@cluster0.p8gpj.mongodb.net/myFirstDatabase?retryWrites=true", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
 
     
    });

    console.log("MongoDB Connected....");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;