const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  user: {
    type: String,
    validate: {
      validator: user => user.length >= 3,
      message: 'O user deve conter mais que 3 caracteres.'
    },
    required: [true, 'O campo user  é obrigatório']
  },
  
  password:{
    type: String,
    validate: {
      validator: password => password.length >= 5,
      message: 'A senha dever ser maior ou igual que 5'
    },
    required: [true, 'O campo senha é obrigatório']
  }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
