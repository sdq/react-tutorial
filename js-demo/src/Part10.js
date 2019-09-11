import React from 'react';
import { firstName, lastName, year } from './profile';
import myFunction from './profileDefault';

function importDemo() {
    alert(firstName + ' ' + lastName + ' ' + year);
}

function exportDefaultDemo() {
    alert(myFunction(2, 3));
}

function Part10() {
    return (
        <div>
            <h2>10. Module</h2>
            <ol>
                <li>
                    <button onClick={importDemo}>export and import</button>
                </li>
                <li>
                    <button onClick={exportDefaultDemo}>export default</button>
                </li>
            </ol>
        </div>
    );
}

export default Part10;