"use strict";

const Hello = require("../../models/Hello")
const logger = require("../../config/logger");

const output = {
    home: (req, res) =>{
        logger.info(`GET /`);
        res.render("home/index");
    },
};

const process = {
    home: async (req, res) =>{
        const hello = new Hello();
        const response = await hello.helloPy();

        const url = {
            method: "POST",
            path: "/",
            status: response.err ? 400 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
};

module.exports = {
    output,
    process,
};

const log = (response, url) =>{
    if(response.err)
        logger.error(`${url.method} ${url.path} ${url.status} res: ${response.success} ${response.err}`);
    else
        logger.info(`${url.method} ${url.path} ${url.status} res: ${response.success} ${response.msg || ""}`);
}