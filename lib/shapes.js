

    class Shape{
        constructor(fill = "green", letters = "AAA"){
            this.fill = fill;
            this.letters = letters;
        }

        setColor(fill){

        }
    }

    class Circle extends Shape{
        constructor(fill, letters){
            super(fill, letters);
            this.radius = radius;
        }

        render(){
            return `<circle cx="150" cy="100" r="80" fill="${this.fill}"/>`
        }
    }

    class Square extends Shape{
        constructor(fill, letters){
            super(fill, letters)
        }

        render(){
            return `<polygon width="100%" height="100%" fill="${this.fill}" />`
        }
    }

    class Triangle extends Shape{
        constructor(fill, letters){
            super(fill, letters);
        }

        render(){
            return `<polygon points = "80, -10 244, 180 10, 180" fill = "${this.fill}"`
        }
    }