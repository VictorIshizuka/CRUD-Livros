import mongoose from "mongoose"

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://victorishizuka:ishizuka131@alura.hk9oims.mongodb.net/Alura-node");

let db = mongoose.connection;

export default db;