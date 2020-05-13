import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './App.css';
import Job from './Job.js';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {  myName: "حمید", lastName: "keyhani"}
    }
    render() {
        return (
            <div className="App">
                <h1>Hello { this.state.myName + " " + this.state.lastName }</h1>
                {/*access to props*/}
                <h2>my age is { this.props.age }</h2>
                <Job job="Full stack Android & Web Developer"/>
            </div>
        )
    }
}

export default Person;
