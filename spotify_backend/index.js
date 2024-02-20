const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config()
console.log(process.env)
const app = express();
const port = 8000;
// connect mongodb
mongoose.connect("mongodb+srv://test-user:" + process.env.MONGO_PASSWORD + "@cluster0.vagkg2p.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((x) => {
    console.log("Connected to MongoDb");
}).catch((err) => {
    console.log("Error while connecting to MongoDb!")
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})