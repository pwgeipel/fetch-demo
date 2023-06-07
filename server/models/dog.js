const { Schema, model } = require ('mongoose')

const dogSchema = new Schema({
    id: String,
    img: String,
    name: {
        type: String,
        trim: true,
    },
    age: Number,
    zip_code: String,
    breed: String

})

const Dog = model('Dog', dogSchema)

module.exports = Dog