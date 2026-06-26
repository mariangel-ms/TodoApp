const mongoose = require("mongoose");

// Se definen las propiedades o atributos de la base de datos
const todoSchema = new mongoose.Schema({
    text: String,
    checked: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

todoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

//Se crea el modelo
const Todo = mongoose.model('Todo', todoSchema);

//Se exporta el modelo
module.exports = Todo;