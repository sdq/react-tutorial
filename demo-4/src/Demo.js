import React, { Component } from 'react';
import LifeCycle from './LifeCycle';

export default class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(e) {
        this.setState({name : e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateInput}></input>
                <LifeCycle name={this.state.name}/>
            </div>
        )
    }
}
