import * as mongoose from "mongoose";

export const ItemSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true
  // },
  name: {
    type: String,
    required: true,
    index: { unique: true }
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});