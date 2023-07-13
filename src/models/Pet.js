const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Buffer } = require('buffer');

const PetSchema = new Schema({
  // Antigo Buffer
  petPicture: {
    type: String,
    validate: {
      validator: (petPicture) => petPicture.length > 0,
      message: "A foto do pet é obrigatória e deve ser fornecida corretamente.",
    },
    required: [true, "O campo foto é obrigatório"],
  },

  petName: {
    type: String,
    validate: {
      validator: (name) => name.length > 0,
      message: "Nome não pode ser nulo",
    },
    required: [true, "O campo Nome é obrigatório"],
  },
  race: {
    type: String,
    validate: {
      validator: (raca) => raca.length > 0,
      message: "Raça não pode ser nulo",
    },
    required: [true, "O campo Raça é obrigatório"],
  },
  size: {
    type: String,
    // validate: {
    //     validator: porte => porte.length > 0,
    //     message: 'Porte não pode ser nulo'
    // },
    validate: {
      validator: function (value) {
        if (value !== "Pequeno" && value !== "Médio" && value !== "Grande") {
          return false;
        }
        return true;
      },
      message: "O porte informado está incorreto",
    },
    required: [true, "O campo Porte é obrigatório"],
  },
  age: {
    type: String,
    validate: {
      validator: (idade) => idade.length > 0,
      message: "Idade não pode ser nulo",
    },
    required: [true, "O campo idade é obrigatório"],
  },
  weight: {
    type: Number,
    validate: {
      validator: (peso) => peso > 0.5,
      message: "Peso deve ser maior que 0.5",
    },
    required: [true, "O campo peso é obrigatório"],
  },
  sex: {
    type: String,
    validate: {
      validator: function (value) {
        if (value !== "Macho" && value !== "Fêmea") {
          return false;
        }
        return true;
      },
      message: "O sexo informado está incorreto",
    },
    required: [true, "O campo sexo é obrigatório"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: [true, "O campo dono é obrigatório"],
  },
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
