const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceHistoricSchema = new Schema({

  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: [true, "O campo clientID é obrigatório"],
  },

  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: [true, "O campo Service é obrigatório"],
  },
  dateTime: {
    type: String,
    required: [true, "O campo dateTime é obrigatório"],
  },
});

const ServiceHistoric = mongoose.model('ServiceHistoric', ServiceHistoricSchema);

module.exports = ServiceHistoric;
