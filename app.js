// Set up server
const http = require("http")
const express = require("express");
//const db = require()
const app = express();
//include middleware (static files, json, urlencode)
app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))