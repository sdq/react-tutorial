import React from 'react';

function defaultParam() {
    function f(x, y = 5, z) {
        return [x, y, z];
    }
    alert(f()) // [undefined, 5, undefined]
    // alert(f(1)) // [1, 5, undefined]
    // alert(f(1, ,2)) // error
    // alert(f(1, undefined, 2)) // [1, 5, 2]
}

function restParam() {
    function add(...values) {
        let sum = 0;
      
        for (var val of values) {
          sum += val;
        }
      
        return sum;
    }
      
    alert(add(2, 5, 3))
}

function arrowFunction() {
    var sum = (num1, num2) => { return num1 + num2; }
    alert(sum(10,5));
}

function Part03() {
    return (
        <div>
            <h2>3. function</h2>
            <ol>
                <li>
                    <button onClick={defaultParam}>default parameter</button>
                </li>
                <li>
                    <button onClick={restParam}>rest parameter</button>
                </li>
                <li>
                    <button onClick={arrowFunction}>arrow function</button>
                </li>
            </ol>
        </div>
    );
}

export default Part03;