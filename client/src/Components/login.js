import { React, useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./context";


function Login(props){
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userContext = useContext(UserContext);
  let userInfo = userContext.state;

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleLogin(){
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    const url = `/account/login/${email}/${password}`;
    (async () => {
      var res  = await fetch(url, {method: 'POST'});
      var data = await res.json();    
      userInfo.loggedIn = true;
      userInfo.userName = data.name;
      userInfo.email = email;
      props.handleLoginChange(true);
      console.log(userInfo);
    })();
    setStatus('');
    setShow(false);
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card style={{ backgroundColor: "lavender", color: "black", width: "18rem" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
            {show ? (  
                <>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                </>
                ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}></button>
                </>
                )}
        </Card.Body>
    </Card>
  )
}

export default Login;