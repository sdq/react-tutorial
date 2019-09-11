import React from 'react';

function objectAssign() {
    const target = { a: 1 };

    const source1 = { b: 2 };
    const source2 = { c: 3 };

    Object.assign(target, source1, source2);
    alert(target.c);
}

function shallowCopy() {
    const obj1 = {a: {b: 1}};
    const obj2 = Object.assign({}, obj1);

    obj1.a.b = 2;
    alert(obj2.a.b); // 2
}

function Part05() {
    return (
        <div>
            <h2>5. object</h2>
            <ol>
                <li>
                    <button onClick={objectAssign}>Object.assign()</button>
                </li>
                <li>
                    <button onClick={shallowCopy}>shallow copy</button>
                </li>
            </ol>
        </div>
    );
}

export default Part05;