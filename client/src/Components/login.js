import { React, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card } from "react-bootstrap";

function Login(props) {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loggedIn = localStorage.getItem('email') != null;
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn)
      navigate("/");
    else {
      document.getElementById("nav5").className = "nav-item";
      document.getElementById("nav6").className = "nav-item active";
    }

  })

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    const url = `/account/login/${email}/${password}`;
    (async () => {
      var res = await fetch(url, { method: 'POST' });
      if (res.status === 200) {
        var data = await res.json();
        localStorage.setItem('email', email);
        localStorage.setItem('userName', data.name);
        props.handleLogin();  
        setStatus('');
        setShow(false);    
      } else {
          alert('Invalid login');
      }
    })();
  }

  function clearForm() {
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
            Email address<br />
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
            Password<br />
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
            <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
          </>
        ) : (
          <>
            <h5>You have successfully been logged</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}></button>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default Login;