import './App.css';
import { React, useState } from "react";
import { NavBar } from "./components";
import ContextProvider from './context';
import { Routes, Route } from 'react-router-dom';
import {
    Home,
    CreateAccount,
    Deposit,
    Withdraw,
    Login, 
    Logout
  } from "./components";


function App() {
  const [loggedIn, setLoggedIn] = useState(false); 
  const handleLogin = () => {
    setLoggedIn(true);
  }
  const handleLogout = () => {
    setLoggedIn(false);
  }
  return (
    <div>
      <ContextProvider>
        <NavBar/>
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/createAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login handleLogin={() => handleLogin()}/>} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/logout/" element={<Logout handleLogout={() => handleLogout()}/>} />
          </Routes>
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;