// Set up server
const http = require("http")
const express = require("express");
const db = require('./model/db')


//const db = require()
const app = express();

const server = http.createServer(app)

//include middleware (static files, json, urlencode)
app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


server.listen(3000, '127.0.0.1', () => {
    console.log("Server listening on http://127.0.0.1:3000" )
})