import React from 'react';

function spread() {
    function add(x, y) {
        return x + y;
    }
    
    const numbers = [4, 38];
    alert(add(...numbers)) // 42
}

function concatArray() {
    const arr1 = ['a', 'b'];
    const arr2 = ['c'];
    const arr3 = ['d', 'e'];
    alert([...arr1, ...arr2, ...arr3]);
}

function spreadString() {
    alert([...'hello']);
}

function findDemo() {
    let result = [1, 5, 10, 15].find(function(value, index, arr) {
        return value > 9;
    })
    alert(result);
}

function fillDemo() {
    let result = new Array(3).fill(7);
    alert(result);
}

function flatDemo() {
    let result = [1, 2, [3, 4]].flat();
    alert(result);
}

function Part04() {
    return (
        <div>
            <h2>4. array</h2>
            <ol>
                <li>
                    <button onClick={spread}>spread</button>
                </li>
                <li>
                    <button onClick={concatArray}>concat array</button>
                </li>
                <li>
                    <button onClick={spreadString}>spread string</button>
                </li>
                <li>
                    <button onClick={findDemo}>find() demo</button>
                </li>
                <li>
                    <button onClick={fillDemo}>fill() demo</button>
                </li>
                <li>
                    <button onClick={flatDemo}>flat() demo</button>
                </li>
            </ol>
        </div>
    );
}

export default Part04;