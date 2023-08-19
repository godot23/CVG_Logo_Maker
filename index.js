const fs = require("fs");
let SVG = require("./lib/svg");
const inquirer = require("inquirer");
const shape = require('./lib/shapes.js');

// let example = new SVG("AND", "green", "triangle", "yellow")

inquirer
    .prompt([
        {
            type: "list",
            name: "shape",
            message: "please choose a shape",
            choices: [
                'square',
                'circle',
                'triangle',
            ]
        },
        {
            type: 'input',
            name: 'color',
            message: 'please input a color for the shape',
        },
        {
            type: 'input',
            name: 'letters',
            message: 'please input 3 letters for display in your shape'
        },
        {
            type: "input",
            name: "letterColor",
            message: "please input a color for the text"
        }
    ])

    .then((answers) =>{
        if(answers.shape === "square"){
            return new shape.Square(answers.color, answers.letters, answers.letterColor);

        }
        if(answers.shape === "circle"){
            return new shape.Circle(answers.color, answers.letters, answers.letterColor);
           
        }
        if(answers.shape === "triangle"){
            return new shape.Triangle(answers.color, answers.letters, answers.letterColor);
        }

    })

    .then((shape) => {
        fs.writeFile("shape.svg", shape.render(), function(err){
            if(err)
            console.log(err)
        })
    })
    

