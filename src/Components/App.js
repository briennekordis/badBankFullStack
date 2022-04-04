import './App.css';
import React, { useState } from "react";
import { NavBar, Main } from "./components";
import ContextProvider from './context';

function App() {
  const [users, setUsers] = useState([]);
  const value = { users, setUsers };

    return (
      <div>
        <NavBar />
      <ContextProvider>
        <div className="container" style={{padding: "20px"}}>
        <Main />
        </div>
      </ContextProvider>   
      </div>   
    );
  }

export default App;