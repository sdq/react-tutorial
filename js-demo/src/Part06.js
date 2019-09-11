import React from 'react';

function setDemo() {
    const s = new Set();

    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

    for (let i of s) {
        console.log(i);
    }
}

function mapDemo() {
    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    
    console.log(map.size) // 2
    console.log(map.has('name')) // true
    console.log(map.get('name')) // "张三"
    console.log(map.has('title')) // true
    console.log(map.get('title')) // "Author"
}

function Part06() {
    return (
        <div>
            <h2>6. Set and Map</h2>
            <ol>
                <li>
                    <button onClick={setDemo}>Set</button>
                </li>
                <li>
                    <button onClick={mapDemo}>Map</button>
                </li>
            </ol>
        </div>
    );
}

export default Part06;