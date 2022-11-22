import React, { useState } from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Signup from './views/Signup';
import Farmer from './views/Farmer';
import Dealer from './views/Dealer';
import Admin from './views/Admin';
import Profile from './views/Profile';
import Logout from './views/Logout';
import Header from './components/Header';

// import Payment from './views/Payment';


function App() {
    
    const [currentUser, setCurrentUser] = useState();

    console.log(currentUser);

    return (
        <>
            <Router>
                <Header isLoggedIn={currentUser !== undefined} currentUser={currentUser} />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
                    <Route path="/signup" element={<Signup />} />
                    {currentUser &&
                        <>
                            <Route path="/profile" element={<Profile name={currentUser.firstName + currentUser.lastName} userType={currentUser.userType} id={currentUser.id} />} />
                            {currentUser.userType === "farmer" && <Route path="/farmer" element={<Farmer currentUser={currentUser} />} />}
                            {currentUser.userType === "dealer" && <Route path="/dealer" element={<Dealer currentUser={currentUser} />} />}
                            {currentUser.userType === "admin" && <Route path="/admin" element={<Admin currentUser={currentUser} />} />}
                            <Route path="/logout" element={<Logout />} />

                        </>
                    }


                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;