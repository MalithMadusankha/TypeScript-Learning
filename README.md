# TypeScript-Learning

#TypeScript

Setup
Installation
Globally Install - npm i -g typescript
Transioncompile - tsc <filename.ts>
Install tsconfig.json - tsc –init

Tsconfig.json
/* Modules */
target : compilation version
rootDir: starting point

/* Emit */
outDir: compiled files stored
"removeComments": true, remove comments when compiling to JS
"noEmitOnError": true, if there any error compiler will stop
After configure tsconfig.json can compile code using : tsc
"noImplicitAny": true, 

"noUnusedParameters": true, this show warning when we are not using param inside the function

"noImplicitReturns": true, if we are not return anything, warning

 "noUnusedLocals": true,

Debugging
"sourceMap": true, Say how each line of code infile.ts map to the file.js

Create launch.json file and add line preLaunchTask
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${file}",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}



Fundamentals



Best Practises 
When assign values to array make sure to assign one data type.Then compiler can understand the type of variables 
When creating function annotate the return type
Declare with type (without assiging )
Variable 
Array
Parameters


Object are static, not dynamic such as JS




