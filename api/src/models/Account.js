const mongoose = require("mongoose");

const instance = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
      required: true,
      max: 50,
      min: 8,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["usuario","admin"],
      default: "usuario",
    },
  },
  {
    timestamps: true,
  }
  //comentario
);
const modelName = "UserCinema";

module.exports = mongoose.model('UserCinema', instance);
