import React from 'react';

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }

    static classMethod() {
        return 'this is class method';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
  
    toString() {
        return this.color + ' ' + super.toString();
    }
}

function classDemo() {
    let p = new Point(2,3);
    alert(p.toString());
}

function staticMethod() {
    alert(Point.classMethod());
}

function classExtends() {
    let cp = new ColorPoint(2,3, 'red');
    alert(cp.toString());
}

function Part09() {
    return (
        <div>
            <h2>9. Class</h2>
            <ol>
                <li>
                    <button onClick={classDemo}>class demo</button>
                </li>
                <li>
                    <button onClick={staticMethod}>static method</button>
                </li>
                <li>
                    <button onClick={classExtends}>class extend</button>
                </li>
            </ol>
        </div>
    );
}

export default Part09;