import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div onClick={this.props.clicked}>
                <h1>{this.props.title}</h1>
                {'/courses/'+this.props.id === this.props.currentId ? <p>You selected the Course with ID: {this.props.id}</p> : null}
            </div>
        );
    }
}

export default Course;
