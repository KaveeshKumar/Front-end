import React from 'react'
import "../assets/css/Login.css"
import { Link } from "react-router-dom";
import Authentication from '../services/Authentication';

const Signup = () => {
    const [userType, setUserType] = React.useState("farmer")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [password, setPassword] = React.useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            firstName,
            lastName,
            password,
        }

        if (userType === "farmer") {
            Authentication.signupFarmer(user)
                .then(res => {
                    alert("Your ID is: " + res.data.id)
                    window.location.href = '/'
                })
        } else if (userType === "dealer") {
            Authentication.signupDealer(user)
                .then(res => {
                    alert("Your ID is: " + res.data.id)
                    window.location.href = '/'
                })
        } else {
            Authentication.signupAdmin(user)
                .then(res => {
                    alert("Your ID is: " + res.data.id)
                    window.location.href = '/'
                })
        }
    }


    return (
        <div>
            <div className="login-bg">
                <div className="login-container">
                    <h1 className="box-heading">Signup</h1>
                    <div className="user-type">
                        <div className={`user-type-container ${userType === "farmer" ? "active" : ""}`} onClick={() => setUserType("farmer")}>
                            Farmer
                        </div>
                        <div className={`user-type-container ${userType === "dealer" ? "active" : ""}`} onClick={() => setUserType("dealer")}>
                            Dealer
                        </div>
                        <div className={`user-type-container ${userType === "admin" ? "active" : ""}`} onClick={() => setUserType("admin")}>
                            Admin
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Last name</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                       
                        <button type="submit" className="btn submit-btn" onClick={handleSubmit}>Submit</button>
                    </form>
                    <div className="already-registered">
                        <p>Already registered? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup