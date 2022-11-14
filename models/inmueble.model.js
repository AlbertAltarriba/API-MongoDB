const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inmuebleSchema = new Schema({
    piso: String,
    letra: {
        type: String,
        validate: {
            validator: (v) => {
              return v.length === 1 && /[a-zA-Z]/.test(v) || v.length === 0; //comprobamos que solo hay 1 carácter alfabético o que esté vacío
            },
            message: 'Debes introducir solo un carácter alfabético'
        }
    },
    extensión: String,
    numHabitaciones: {
        type: Number,
        min: [0, 'El valor mínimo es 0']
    },
    alquilado: Boolean,
    nombrePropietario: {
        type: String,
        required: [true, 'El campo nombre es obligatorio'],
        validate: {
            validator: (v) => {
              return /[a-zA-Z]+\s[a-zA-Z]+/.test(v); //comprobamos que hay al menos 2 palabras
            },
            message: 'Introduce nombre y apellido'
        }
    },
    mail: {
        type: String,
        validate: {
            validator: (v) => {
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/.test(v); 
            },
            message: 'El mail no tiene el formato correcto'
        }
    }
});

module.exports = mongoose.model('inmueble', inmuebleSchema);