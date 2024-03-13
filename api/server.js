const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://ronaldkwan93:ronaldkwan93@mern-estate.levhxmv.mongodb.net/?retryWrites=true&w=majority&appName=MERN-estate", {
})
    .then(() => console.log( "Connected to DB"))
    .catch(console.error)

const Todo = require('./models/todo')

app.listen(3001, () => console.log("Server started on port 3001"));