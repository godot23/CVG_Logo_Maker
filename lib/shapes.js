

    class Shape{
        constructor(fill, letters, textColor){
            this.fill = fill;
            this.letters = letters;
            this.textColor = textColor;
        }

        }

    class Circle extends Shape{
        constructor(fill, letters, textColor){
            super(fill, letters, textColor);
        }

        render(){
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.fill}"/>
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
            </svg>`
        }
    }

    class Square extends Shape{
        constructor(fill, letters, textColor){
            super(fill, letters, textColor)
        }

        render(){
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${this.fill}" />
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
            </svg>`
        }
    }

    class Triangle extends Shape{
        constructor(fill, letters, textColor){
            super(fill, letters, textColor);
        }

        render(){
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points = "80, -20 244, 180 20, 180" fill = "${this.fill}"/>
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
            </svg>`
        }
    }

module.exports = {Circle, Square, Triangle}