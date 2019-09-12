import React from 'react';

function generatorDemo1() {
    function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }
      
    var hw = helloWorldGenerator();

    console.log(hw.next());
    console.log(hw.next());
    console.log(hw.next());
    console.log(hw.next());
}

function generatorDemo2() {
    function* foo(x) {
        var y = 2 * (yield (x + 1));
        var z = yield (y / 3);
        return (x + y + z);
    }
    
    var a = foo(5);
    console.log(a.next()) // Object{value:6, done:false}
    console.log(a.next()) // Object{value:NaN, done:false}
    console.log(a.next()) // Object{value:NaN, done:true}
    
    var b = foo(5);
    console.log(b.next()) // { value:6, done:false }
    console.log(b.next(12)) // { value:8, done:false }
    console.log(b.next(13)) // { value:42, done:true }
}

function forOfDemo() {
    function* foo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }
    
    for (let v of foo()) {
        console.log(v);
    }
}

function generatorInGenerator() {
    function* foo() {
        yield 'a';
        yield 'b';
    }

    function* bar() {
        yield 'x';
        yield* foo();
        yield 'y';
    }

    for (let v of bar()){
        console.log(v);
    }
}

function clockDemo() {
    var clock = function* () {
        while (true) {
            console.log('Tick!');
            yield;
            console.log('Tock!');
            yield;
        }
    };
    let myClock = clock();
    console.log(myClock.next());
    console.log(myClock.next());
    console.log(myClock.next());
    console.log(myClock.next());
    console.log(myClock.next());
}

function Part08() {
    return (
        <div>
            <h2>8. Generator</h2>
            <ol>
                <li>
                    <button onClick={generatorDemo1}>Generator Demo</button>
                </li>
                <li>
                    <button onClick={generatorDemo2}>next() with parameters</button>
                </li>
                <li>
                    <button onClick={forOfDemo}>for...of</button>
                </li>
                <li>
                    <button onClick={generatorInGenerator}>yield* demo</button>
                </li>
                <li>
                    <button onClick={clockDemo}>clock demo</button>
                </li>
            </ol>
        </div>
    );
}

export default Part08;