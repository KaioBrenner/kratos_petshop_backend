const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  bath: {
    type: Boolean,
    default: true,
  },
  shave: {
    type: Boolean,
    default: true,
  },
  nails: {
    type: Boolean,
    default: true,
  },
  delivery: {
    type: Boolean,
    default: true,
  },
  comments: {
    type: String,
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet",
    required: [true, "O campo pet é obrigatório"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: [true, "O campo dono é obrigatório"],
  },
});

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
