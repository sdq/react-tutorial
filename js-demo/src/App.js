import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Part01 from './Part01';
import Part02 from './Part02';
import Part03 from './Part03';
import Part04 from './Part04';
import Part05 from './Part05';
import Part06 from './Part06';
import Part07 from './Part07';
import Part08 from './Part08';
import Part09 from './Part09';
import Part10 from './Part10';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>JS Demo</h1>
            <Router>
                <div className='menu'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">1. ES6 Introduction</Link>
                            </li>
                            <li>
                                <Link to="/2/">2. let and const</Link>
                            </li>
                            <li>
                                <Link to="/3/">3. function</Link>
                            </li>
                            <li>
                                <Link to="/4/">4. array</Link>
                            </li>
                            <li>
                                <Link to="/5/">5. object</Link>
                            </li>
                            <li>
                                <Link to="/6/">6. Set and Map</Link>
                            </li>
                            <li>
                                <Link to="/7/">7. Promise</Link>
                            </li>
                            <li>
                                <Link to="/8/">8. Generator</Link>
                            </li>
                            <li>
                                <Link to="/9/">9. Class</Link>
                            </li>
                            <li>
                                <Link to="/10/">10. Module</Link>
                            </li>
                        </ul>
                    </nav>
                    <a href="https://www.github.com/sdq/react-tutorial" style={{marginLeft:20}}>code resource link</a>
                </div>
                <div className='demo'>
                    <Route path="/" exact component={Part01} />
                    <Route path="/1/" component={Part01} />
                    <Route path="/2/" component={Part02} />
                    <Route path="/3/" component={Part03} />
                    <Route path="/4/" component={Part04} />
                    <Route path="/5/" component={Part05} />
                    <Route path="/6/" component={Part06} />
                    <Route path="/7/" component={Part07} />
                    <Route path="/8/" component={Part08} />
                    <Route path="/9/" component={Part09} />
                    <Route path="/10/" component={Part10} />
                </div>
            </Router>
            
        </div>
    );
}

export default App;
