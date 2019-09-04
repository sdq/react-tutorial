import React, { Component } from 'react';

export default class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }
        this.updateInput = this.updateInput.bind(this);
        this.addFood = this.addFood.bind(this);
        this.removeFood = this.removeFood.bind(this);
    }

    updateInput(e) {
        this.setState({name : e.target.value})
    }

    addFood() {
        this.props.addFood(this.state.name);
    }

    removeFood() {
        this.props.removeFood();
    }

    render() {
        return (
            <div style={{paddingLeft: 30}}>
                <h1>food list</h1>
                <input type="text" onChange={this.updateInput}></input>
                <button onClick={this.addFood}>add</button>
                <button onClick={this.removeFood}>remove</button>
                {this.props.foods.map((food, index)=> <li key={index}>{food}</li>)}
            </div>
        )
    }
}
