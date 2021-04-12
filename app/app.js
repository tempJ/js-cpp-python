"use strict";

const express = require("express");
const bparser = require("body-parser");
const dotenv = require("dotenv");
// const browserify = require("browerify");

// const b = browserify({
//     entries: ["./app/bin/www.js"],
//     cache: {},
//     packageCache: {},
//     plugin: [watchify]
// })
// b.on("update", bundle);
// bundle();

// function bundle(){
//     b.bundle()
//         .on("error", console.error)
//         .pipe()
// }

const app = express();
dotenv.config();

// router
const home = require("./src/routes/home");
// const { default: bundle } = require("../bundle");

// app setting
app.set("views", "./app/src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bparser.json());
app.use(bparser.urlencoded({extended: true}));

app.use("/", home);

module.exports = app;