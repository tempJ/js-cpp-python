(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        // body: JSON.stringify(req),
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
    .then(console.error);
    
    console.log(pyStr);
}

// document.getElementsByTagName("div")[1].innerHTML = ".cpp: " + cppStr;

home();
},{}]},{},[1]);
