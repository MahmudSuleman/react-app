import React, { Component } from 'react'

class Profile extends Component {

    state = {
        first_name: 'Mahmud',
        last_name: 'Sheikh',
        age: 20
    }
    render() {


        return (
            <div className="profile-content">
                <div className="profile-header">
                    <p>User Profile</p>
                </div>

                <div className="profile-body">
                    <h3>First Name: {this.state.first_name}</h3>
                    <h3>Last Name: {this.state.last_name}</h3>
                    <h3>Age: {this.state.age}</h3>
                </div>

                <div className="profile-footer">

                </div>
            </div>
        )
    }
}

export default Profile;