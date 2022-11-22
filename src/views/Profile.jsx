import React from 'react'

const Profile = (props) => {
    console.log(props);
    const { name, userType, id } = props;

    return (
        <div className="login-bg">
            <div className="login-container">
                <h1 className="box-heading">{name}</h1>
                <br />
                <h2>User Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
                <h2>User ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {id}</h2>
            </div>
        </div>
    )
}

export default Profile