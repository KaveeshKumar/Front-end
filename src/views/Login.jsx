import React from 'react'
import "../assets/css/Login.css"
import { Link } from "react-router-dom";
import Authentication from '../services/Authentication';

const Login = ({ setCurrentUser }) => {
    const [userType, setUserType] = React.useState("dealer")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        Authentication.getJwtToken(username, password)
            .then(res => {
                let token = res.data.jwt

                if (userType === "dealer") {
                    Authentication.loginDealer(username, token)
                        .then(res => {
                            setCurrentUser({...res.data, userType: "dealer"})
                            document.getElementById("btn1").click()
                        })
                } else if (userType === "farmer") {
                    Authentication.loginFarmer(username, token)
                        .then(res => {
                            setCurrentUser({...res.data, userType: "farmer"})
                            document.getElementById("btn2").click()
                        })
                } else {
                    Authentication.loginAdmin(username, token)
                        .then(res => {
                            setCurrentUser({...res.data, userType: "admin"})
                            document.getElementById("btn3").click()
                        })
                }
            })
    }

    return (
        <div>
            <div className="login-bg">
                <div className="login-container">
                    <h1 className="box-heading">Login</h1>
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
                            <label htmlFor="email">Username</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>  
                        
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn submit-btn" onClick={handleSubmit}>Submit</button>
                    </form>
                    <div className="already-registered">
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>
                    <Link to="/dealer"><button style={{ display: "none" }} id="btn1"></button></Link>
                    <Link to="/farmer"><button style={{ display: "none" }} id="btn2"></button></Link>
                    <Link to="/admin"><button style={{ display: "none" }} id="btn3"></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Login