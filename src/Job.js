import React, { Component } from 'react';
import './App.css';

class Job extends Component {
    constructor() {
        super();
        this.state = {
            income: 5000
        }
    }
    render() {
        return (
            <div>
                <h3 className="job">My job is { this.props.job }</h3>
            </div>
        )
    }
}

export default Job;
