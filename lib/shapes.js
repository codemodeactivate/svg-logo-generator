class Shape {
    constructor(children) {
        this.children = children;
    }


    renderShape() {
        switch (this.children.shape) {

            case 'circle':
                return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />`;
                break;
            case 'triangle':
                return `<polygon points="50,5 90,90 10,90" style="fill:red;stroke:black;stroke-width:3" />`;
                break;
            case 'square':
                return `<rect x="10" y="10" width="80" height="80" style="fill:red;stroke:black;stroke-width:3" />`;
                break;
                default:
                    throw new Error(`Invalid shape: ${shape}`);
        }
    }

}


module.exports = Shape;
