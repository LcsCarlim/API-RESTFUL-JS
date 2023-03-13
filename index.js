const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config()

app.use(
    express.urlencoded({
        extended: true
    }),
);

app.use(express.json())

const personRoutes = require("./routes/personRoutes")

app.use("/person", personRoutes)

app.use(express.json());

const DB_USER = process.env.DB_USER
const DB_PASSWORD =encodeURIComponent (process.env.DB_PASSWORD)

mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-crud.qq8ve8b.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() =>{
    console.log("Mongo connected");
    app.listen(3000)
})
.catch((err) => console.log(err));