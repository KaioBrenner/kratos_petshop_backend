const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name:{
        type: String,
        required:[true, 'O campo name é obrigatório']
    },
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category;