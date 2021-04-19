"use strict";
// const addon = require(""); // build 성공하면 build한 module 경로를 적자
// const result = require("child_process").spawn("python", ["../../py/home/hello.py"]);
// const Hello = require('./hello');
// cppStr = addon.hello();

function home(){
    let pyStr;

    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            // console.log(res.str);
            pyStr = res.str;
            document.getElementsByTagName("div")[2].innerHTML = ".py: " + pyStr;
        }
        else{
            if(res.err) return console.log(res.err);
            console.log(res.msg);
        }
    })
    .catch(console.error);
    
    console.log(pyStr);
}

// document.getElementsByTagName("div")[1].innerHTML = ".cpp: " + cppStr;

home();