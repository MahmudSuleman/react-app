import React, { Component } from 'react'

class Student extends Component {
    state = {
       name: "Mudi",
       age: 90
    }
    render() {
        return (
            <div className='student-div'>
                <h3>Student Name: {this.state.name }</h3>
                <h3>Student Age: { this.state.age } </h3>
            </div>
        )
    }
}
export default Student;