require('dotenv').config();

const ORIGIN = "*";
const PORT = process.env.PORT || 8070;

const MONGO_URI = process.env.MONGOURI || "";
  
const MONGO_OPTIONS = {};

const JWT_SECRET = process.env.JWT_SECRET || "unsafe_secret";

module.exports = {
  ORIGIN,
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
  JWT_SECRET,
};



