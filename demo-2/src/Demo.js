import React, { Component } from 'react';

export default class Demo extends Component {

    getGreeting(user) {
        if (user) {
          return <h1>Hello, {user}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }

    render() {
        return (
            <div>
                {this.getGreeting()}
                {this.getGreeting("Mike")}
            </div>
        )
    }
}
