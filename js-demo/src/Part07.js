import React from 'react';

function promiseDemo1() {
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');  // setTimeout(function, milliseconds, param1, param2, ...)
        });
    }

    timeout(1000).then((value) => {
        alert(value);
    });
}

function promiseDemo2() {
    let promise = new Promise(function(resolve, reject) {
        console.log('Promise');
        resolve();
    });
    
    promise.then(function() {
    console.log('resolved.');
    });
    
    console.log('Hi!');
    
    // Promise
    // Hi!
    // resolved
}

function loadImageAsync() {
    function loadImageAsync(url) {
        return new Promise(function(resolve, reject) {
            const image = new Image();
        
            image.onload = function() {
                resolve(image);
            };
        
            image.onerror = function() {
                reject(new Error('Could not load image at ' + url));
            };
        
            image.src = url;
        });
    }
    let url = 'https://www.tongji.edu.cn/images/logo.png';
    loadImageAsync(url).then(function(value) {
        alert('success:' + value);
    }, function(error) {
        alert('fail:' + error);
    })
}

function catchDemo() {
    const someAsyncThing = function() {
        return new Promise(function(resolve, reject) {
            throw new Error('test');
        });
    };
    someAsyncThing()
    .catch(function(error) {
        alert('oh no! :'+ error);
    })
    .then(function() {
        console.log('carry on');
    });
    // oh no [ReferenceError: x is not defined]
    // carry on
}

function promiseAll() {
    const p1 = new Promise((resolve, reject) => {
        resolve('hello');
    }).then(result => result).catch(e => e);
    
    const p2 = new Promise((resolve, reject) => {
        throw new Error('error');
    }).then(result => result).catch(e => e);
    
    Promise.all([p1, p2])
        .then(result => alert(result))
        .catch(e => alert(e));
}

function Part07() {
    return (
        <div>
            <h2>7. Promise</h2>
            <ol>
                <li>
                    <button onClick={promiseDemo1}>Promise Demo 1</button>
                </li>
                <li>
                    <button onClick={promiseDemo2}>Promise Demo 2</button>
                </li>
                <li>
                    <button onClick={loadImageAsync}>Load Image Async</button>
                </li>
                <li>
                    <button onClick={catchDemo}>Catch Demo</button>
                </li>
                <li>
                    <button onClick={promiseAll}>Promise All Demo</button>
                </li>
            </ol>
        </div>
    );
}

export default Part07;