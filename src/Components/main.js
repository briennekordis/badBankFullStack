import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Home,
    AllData,
    CreateAccount,
    Deposit,
    Withdraw,
    Login
  } from "./components";
  
const Main = () => (
    <main>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/createAccount/" element={<CreateAccount/>} />
        <Route path="/login/" element={<Login/>} />
        <Route path="/deposit/" element={<Deposit/>} />
        <Route path="/withdraw/" element={<Withdraw/>} />
        <Route path="/alldata/" element={<AllData/>} /> 
      </Routes>
    </main>
  )
  
  export default Main
  