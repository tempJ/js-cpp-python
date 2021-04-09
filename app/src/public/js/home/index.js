"use strict";

// const cppStr = "Hello World!";
// const str = "text";
// const addon = require(""); // build 성공하면 build한 module 경로를 적자
// const result = require("child_process").spawn("python", ["../../py/home/hello.py"]);
const CProcess = require("child_process");
// spawn("python", ["../../py/home/hello.py"]);
let cppStr, pyStr;

// c++
// cppStr = addon.hello();
cppStr = CProcess.spawn("python", ["../../py/home/hello.py"]).toString();
// py
result.stdout.on("data", (data) => {
    pyStr = data.toString();
});

document.getElementsByTagName("div")[1].innerHTML = ".cpp: " + cppStr;
document.getElementsByTagName("div")[2].innerHTML = ".py: " + pyStr;