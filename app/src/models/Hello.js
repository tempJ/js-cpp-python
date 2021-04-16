"use strict";

// const spawn = require('await-spawn');
const { PythonShell } = require("python-shell");
const HelloFile = require('./HelloFile');

// const CProcess = require("child_process");
const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: "app/src/models",
    args: null
};

class Hello{
    constructor(body){
        this.body = body;
    }
    
    // async helloPyPrivate(callback){
    //     // let str;
    //     const sh = PythonShell.run('hello.py', options, (err, result) => {
    //         if(err) console.log(err);
    //         console.log(`result: ${result}`);
    //         // const str = result;
    //         callback = result;
    //         // setTimeout(() => {
    //         //     console.log("wait");
    //         // }, 2000);
    //         // ret = JSON.stringify(result);
    //         // str = JSON.stringify(result);
    //         // console.log(`promise str: ${str}`);
    //         // return JSON.stringify(result);
    //     });
    //     // sh.stdout.on('data', (data) => {
    //     //     console.log(`data: ${data.toString()}`)
    //     //     const str = data.toString();
    //     //     // return str;
    //     // })
    //     // return str;
    // }

    async helloPy(){
        // const { spawn } = require("child_process");

        try{
            let str = "test"
            str = await HelloFile.helloPy();
            // await this.helloPyPrivate(str);
            // const r = await PythonShell.run('hello.py', options, (err, result) => {
            //         if(err) console.log(err);
            //         console.log(`result: ${result}`);
            //         str = JSON.stringify(result);
            //         console.log(`promise str: ${str}`);
            // });
            // console.log(r.stdout);
            console.log(`str: ${str}`);
            return { success: true, str, msg: "load python script" };
            // return new Promise((resolve, reject) => {
            //     PythonShell.run('hello.py', options, (result, err) => {
            //         if(err) { reject({ success: false, err }); }
            //         console.log(`result: ${result}`);
            //         const str = JSON.stringify(result);
            //         resolve({ success: true, str, msg: "load python script" });
            //     });
            // })
        }
        catch(err){
            return { success: false, err };
        }
        
        // try{
        //     let str = "test";
        //     const promise = new Promise((resolve, reject) => {
        //         PythonShell.run('hello.py', options, (result, err) => {
        //             if(err) { reject({ success: false, err }); }
        //             console.log(`result: ${result}`);
        //             str = JSON.stringify(result);
        //             console.log(`promise str: ${str}`);
        //             resolve({ success: true, str, msg: "load python script" });
        //         });
        //     })
        //     console.log(`str: ${str}`);
        //     return { success: true, str, msg: "load python script" };
        //     // return new Promise((resolve, reject) => {
        //     //     PythonShell.run('hello.py', options, (result, err) => {
        //     //         if(err) { reject({ success: false, err }); }
        //     //         console.log(`result: ${result}`);
        //     //         const str = JSON.stringify(result);
        //     //         resolve({ success: true, str, msg: "load python script" });
        //     //     });
        //     // })
        // }
        // catch(err){
        //     return { success: false, err };
        // }
        

        // try{
        //     // // const python3 = await spawn('ls', ['-a']);
        //     // console.log("s");
        //     // const python3 = await spawn('python3', ["hello.py"]);
        //     // // console.log("result: " + child.stdout.toString());
        //     // // const child = spawn("python3", ["hello.py"]);
        //     let str = "";
        //     const result = await new Promise((res,rej) => {
        //         PythonShell.run('hello.py', options, (data,err) => {
        //             if(err) throw err;
        //             console.log(`return: ${data}`);
        //             str = data;
        //         });
        //     })
        //     console.log(`test: ${result.stdout}`);
            
        //     // console.log("g");
        //     // // child.stdout.on('data', (chunk) => {
        //     // //     str = chunk.toString('utf-8');
        //     // // })
        //     // str = python3.toString();


        //     // python3.stdout.on('data', (data) => {
        //     //     console.log(`result: ${data.toString()}`)
        //     //     // console.log("data");
        //     //     // console.log(data);
        //     //     str += data.toString();
        //     //     // console.log(str)
        //     // })

        //     // python3.stderr.on('data', (data) => {
        //     //     console.log(`error: ${data.toString()}`)
        //     //     console.log("data");
        //     //     // console.log(data);
        //     //     str = data.toString();
        //     // })
        //     // child.c
        //     // python3.on('exit', (code) => {
        //     //     console.log(`close with ${code}`);
        //     // })
        //     console.log(`result: ${str}`);

        //     return { success: true, str, msg: "load python script" };
        // }
        // catch(err){
        //     return { success: false, err };
        // }
    }
}

module.exports = Hello;