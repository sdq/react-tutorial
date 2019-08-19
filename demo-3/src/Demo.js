import React, { Component } from 'react';
import Welcome from './Welcome';

export default class Demo extends Component {

    render() {
        return (
            <div>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
            </div>
        )
    }
}
