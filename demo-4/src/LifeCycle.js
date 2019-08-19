import React, { Component } from 'react'

export default class LifeCycle extends Component {

    // mounting
    constructor(props) {
        super(props);
        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // updating
    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps');
        //console.log(props);
    }

    shouldComponentUpdate(props) {
        console.log('shouldComponentUpdate');
        //console.log(props);
        return true;
    }

    componentWillUpdate(props) {
        console.log('componentWillUpdate');
        //console.log(props);
    }

    componentDidUpdate(props) {
        console.log('componentDidUpdate');
        //console.log(props);
    }

    // unmounting
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
