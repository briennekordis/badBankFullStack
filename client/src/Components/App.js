import './App.css';
import { React, useContext, useState } from "react";
import { NavBar } from "./components";
import ContextProvider from './context';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from "./context";
import {
    Home,
    AllData,
    CreateAccount,
    Deposit,
    Withdraw,
    Login
  } from "./components";


function App() {
  const [loggedIn, setLoggedIn] = useState(false); 
  const handleLoginChange = (loggedIn) => {
    setLoggedIn(loggedIn);
  }
  return (
    <div>
      <ContextProvider>
        <NavBar loggedIn={loggedIn}/>
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/createAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login handleLoginChange={(loggedIn) => handleLoginChange(loggedIn)}/>} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;