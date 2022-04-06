import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";

function Deposit(){
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [deposit, setDeposit] = useState(0);
    const email = localStorage.getItem('email');
    console.log(email);
    // let balance = users[0].balance;
    let nav = document.getElementById("nav1");
    if (nav !== null) {
        document.getElementById("nav1").className = "nav-item";
        document.getElementById("nav2").className = "nav-item active";
        document.getElementById("nav3").className = "nav-item";
        document.getElementById("nav4").className = "nav-item";    
    }

  function validate(num){
      if (isNaN(parseFloat(num))) {
        setStatus('Error: Please enter a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }  

  function negValidate(num){
    if (num < 0 ) {
      setStatus('Error: You cannot deposit a negative amount. Please enter a number greater than 0.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}  

  function handleSubmit() {
    console.log(deposit);
    if (!validate(deposit) || (!negValidate(deposit)))   
     return;
    // balance += parseFloat(deposit);
    //   users[0].deposits.push(parseFloat(deposit));
    //   users[0].balance = balance;
    alert(`Success! Deposited ${deposit} : New balance ${0}`);
    setShow(false);
  };

  function clearForm(){
    setDeposit(0);
    setShow(true);
  }
  
  
  return (
    <Card style={{ backgroundColor: "lightblue", color: "black", width: "18rem" }}>
        <Card.Header>Deposit</Card.Header>
        <Card.Body>
            {show ? (  
                <>
                Your balance is currently: ${0}<br/>
                <br/>
                Deposit Amount<br/>
                <input type="input" className="form-control" id="depositAmount" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled={deposit === "" || deposit === 0} onClick={handleSubmit}>Deposit</button><br/>
                {status}
                </>
                ):(
                <>
                <h5>Transaction Successful</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
                </> 
                )}
        </Card.Body> 
    </Card>
  )
}

export default Deposit;