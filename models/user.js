const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

// Un schema determine la structure du document en base
const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Users", usersSchema);
