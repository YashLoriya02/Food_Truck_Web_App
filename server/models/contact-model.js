const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
})

const Contact = new model("contacts", contactSchema)

module.exports = Contact