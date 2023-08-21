const shapes = require("./shapes.js");
const index = require("../index.js");

describe('shapes', () => {
    describe ("Circle", () =>{
        it("should take user input and create a circle with text following the user provided parameters", () =>{
            const fill = "red";
            const letters = "aaa";
            const textColor = "green";
            const circle = new shapes.Circle(this.fill, this.letters, this.textColor);
            const actualSVG = circle.render();
            expect(actualSVG).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.fill}"/>
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
            </svg>`)
        })
    })
    describe ("Square", () =>{
        it("should take user input and create a square with text following the user provided parameters", () =>{
            const fill = "red";
            const letters = "aaa";
            const textColor = "green";
            const square = new shapes.Square(this.fill, this.letters, this.textColor);
            const actualSVG = square.render();
            expect(actualSVG).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${this.fill}" />
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
            </svg>`)
        })
    })
    describe ("Triangle", () =>{
        it("should take user input and create a triangle with text following the user provided parameters", () =>{
            const fill = "red";
            const letters = "aaa";
            const textColor = "green";
            const triangle = new shapes.Triangle(this.fill, this.letters, this.textColor);
            const actualSVG = triangle.render();
            expect(actualSVG).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points = "80, -20 244, 180 20, 180" fill = "${this.fill}"/>
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
            </svg>`)
        })
    })
})