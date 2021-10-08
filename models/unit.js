import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const unitSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    require: true,
  },
  createdate: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Unit", unitSchema);
