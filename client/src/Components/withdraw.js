import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Withdraw(){
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [withdraw, setWithdraw] = useState('');
  const email = localStorage.getItem('email');
  const [account, setAccount] = useState({});
  let nav = document.getElementById("nav1");
  if (nav !== null) {
      document.getElementById("nav1").className = "nav-item";
      document.getElementById("nav2").className = "nav-item";
      document.getElementById("nav3").className = "nav-item active";
      document.getElementById("nav4").className = "nav-item";    
  }

  useEffect(() => {
    getAccount();
  }, []);

  function getAccount() {
    const url = `/account/find/${email}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      setAccount(data[0]);
    })();  
  }

  function validate(num){
    if (isNaN(parseFloat(num))) {
      setStatus('Error: Please enter a number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}  

function overdraft(num){
  if (num > account.balance) {
    setStatus('Error: You do not have enough funds for this transaction.');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}  

function handleSubmit() {
  if (!validate(withdraw) || (!overdraft(withdraw)))   
   return;
   const url = `/account/update/${email}/-${withdraw}`;
   (async () => {
     var res = await fetch(url, { method: 'PUT' });
     var data = await res.json();
   })();
   getAccount();
   setShow(false);
 };

  function clearForm(){
    setWithdraw('');
    setShow(true);
  }
  
  return (
    <Card style={{ backgroundColor: "lavender", color: "black", width: "18rem" }}>
        <Card.Header>Withdraw</Card.Header>
        <Card.Body>
            {show ? (  
                <>
                Your balance is currently: ${account.balance}<br/>
                <br/>
                Withdrawl Amount<br/>
                <input type="input" className="form-control" id="withdrawlAmount" placeholder="Withdrawl Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled={withdraw === "" || withdraw === 0} onClick={handleSubmit}>Withdraw</button><br/>
                {status}
                </>
                ):(
                <>
                <h5>Transaction Successful</h5>
                <h6>Withdrew ${withdraw}</h6>
                <h6>New balance: ${account.balance}</h6>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawl</button>
                </>
                )}

        </Card.Body>
    </Card>
  )
}

export default Withdraw;