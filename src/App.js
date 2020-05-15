import React, { Component } from 'react';
import './App.css';
import Job from './Job.js';
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

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
                <Fade in={true} timeout={2000}>
                    <Button color="blue" variant="contained">
                        button
                    </Button>
                </Fade>

            </div>
        )
    }
}

export default Person;
