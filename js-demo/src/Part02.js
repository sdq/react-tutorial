import React from 'react';

function letScope() {
    // let scope
    {
        let a = 0;
        var b = 1;
    }
    // alert(a);
    alert(b);
};

function letForLoop() {
    for (let i = 0; i < 10; i++) {
        // ...
    }
    // for (var i = 0; i < 10; i++) {
    //     // ...
    // }
    // alert(i);
}

function deadZone() {
    var tmp = 123;

    if (true) {
        tmp = 'abc'; // ReferenceError if let binding
        //let tmp;
    }

    alert(tmp);
}

function hiddenDeadZone() {
    function bar(x = y, y = 2) {
        return [x, y];
    }
    // function bar(x = 2, y = x) {
    //     return [x, y];
    // }
    bar();
}

function constDemo() {
    
    // const PI; // SyntaxError: Missing initializer in const declaration
    
    const PI = 3.1415;

    // PI = 3; // TypeError: Assignment to constant variable.
}

function Part02() {
    return (
        <div>
            <h2>2. let and const</h2>
            <ol>
                <li>
                    <button onClick={letScope}>let scope</button>
                </li>
                <li>
                    <button onClick={letForLoop}>let in for loop</button>
                </li>
                <li>
                    <button onClick={deadZone}>temporal dead zone</button>
                </li>
                <li>
                    <button onClick={hiddenDeadZone}>hidden temporal dead zone</button>
                </li>
                <li>
                    <button onClick={constDemo}>const demo</button>
                </li>
            </ol>
        </div>
    );
}

export default Part02;