import mongoose from "mongoose"

mongoose.set('strictQuery', true);
mongoose.connect("connection string(more informations in README)");

let db = mongoose.connection;

export default db;