'use strict';

const { spawn } = require("child_process");
const { PythonShell } = require("python-shell");

const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: "app/src/models",
    args: null
};

class HelloFile{
    static helloPy(){
        PythonShell.run('hello.py', options, (err, result) => {
            if(err) console.log(err);
            console.log(`result: ${result}`);
            // callback = result;
            return result;
        });
    }
}

module.exports = HelloFile;