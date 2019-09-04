import React, { Component } from 'react'

export default class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "xxxx"
        }
    }
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>{this.state.title}</li>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}
