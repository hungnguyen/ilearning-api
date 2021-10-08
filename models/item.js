import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const itemSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  content: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  audio: {
    type: String,
  },
  ordernumber: {
    type: Number,
  },
  unitid: mongoose.Types.ObjectId,
});

export default mongoose.model("Item", itemSchema);
