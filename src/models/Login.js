const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  logged: {
    type: Boolean,
    default: false,
  },
});

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;
