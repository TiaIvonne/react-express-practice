import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
        <div>
        <p>{this.props.firstName}</p>
        <p>{this.props.lastName}</p>

        </div>
        )
    }
}

export default Student