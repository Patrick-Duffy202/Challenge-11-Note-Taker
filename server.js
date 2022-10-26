const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./Develop/db/db.json")
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
