import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./context";

function Withdraw(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [withdraw, setWithdraw] = React.useState(0);
  const userContext = useContext(UserContext);
  let users = userContext.state.users;
  let balance = users[0].balance;
  let nav = document.getElementById("nav1");
  if (nav !== null) {
      document.getElementById("nav1").className = "nav-item";
      document.getElementById("nav2").className = "nav-item";
      document.getElementById("nav3").className = "nav-item active";
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

function overdraft(num){
  if (num > balance) {
    setStatus('Error: You do not have enough funds for this transaction.');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}  

function handleSubmit() {
  console.log(withdraw);
  if (!validate(withdraw) || (!overdraft(withdraw)))   
   return;
  balance -= parseFloat(withdraw);
  users[0].withdrawls.push(parseFloat(withdraw));
  users[0].balance = balance;
  alert(`Success! Withdrew ${withdraw} : New balance ${balance}`);
  setShow(false);
};

  function clearForm(){
    setWithdraw(0);
    setShow(true);
  }
  
  return (
    <Card style={{ backgroundColor: "lavender", color: "black", width: "18rem" }}>
        <Card.Header>Withdraw</Card.Header>
        <Card.Body>
            {show ? (  
                <>
                Your balance is currently: ${balance}<br/>
                <br/>
                Withdrawl Amount<br/>
                <input type="input" className="form-control" id="withdrawlAmount" placeholder="Withdrawl Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled={withdraw === "" || withdraw === 0} onClick={handleSubmit}>Withdraw</button><br/>
                {status}
                </>
                ):(
                <>
                <h5>Transaction Successful</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawl</button>
                </>
                )}

        </Card.Body>
    </Card>
  )
}

export default Withdraw;