const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  fullName: {
    type: String,
    validate: {
      validator: fullName => fullName.length >= 3,
      message: 'O nome deve conter mais que 3 caracteres.'
    },
    required: [true, 'O campo Nome Completo é obrigatório']
  },
  cpf: {
    type: String,
    validate: {
      validator: cpf => cpf.length === 11,
      message: 'O CPF está incorreto, verifique-o e tente novamente'
    },
    required: [true, 'O campo CPF é obrigatório'],
    unique: true
  },
  tel: {
    type: String,
    validate: {
      validator: telefone => telefone.length === 11,
      message: 'O telefone está incorreto, verifique-o e tente novamente'
    },
    required: [true, 'O campo Telefone é obrigatório'],
    unique: true
  },
  active: {
    type: Boolean,
    default: true,
    // set: function(value) {
    //   return value === 'sim' ? true : false;
    // },
    // get: function(value) {
    //   return value ? 'sim' : 'nao';
    // }
  },
  cep: {
    type: String,
    validate: {
      validator: cep => cep.length === 8,
      message: 'O CEP informado está incorreto!'
    },
    required: [true, 'O campo cep não deve ser nulo']
  },
  address: {
    type: String,
  },
  district: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
    validate: {
      validator: estado => estado.length === 2,
      message: 'O estado informado está incorreto!'
    },
  },
});

const Client = mongoose.model('Cliente', ClientSchema);

module.exports = Client;
