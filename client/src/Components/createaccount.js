import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Card } from "react-bootstrap";


function CreateAccount() {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loggedIn = localStorage.getItem('email') != null;
    const navigate = useNavigate();
  
    useEffect(() => {
        if (loggedIn) 
          navigate("/");
        else {
            document.getElementById("nav5").className = "nav-item active";
            document.getElementById("nav6").className = "nav-item";
        }
      })    
    
    function validate(field, label){
        if (!field) {
          setStatus(`Error: ${label} must be filled out`);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }

    function validatePassword(password) {
        if (password.length < 8) {
            setStatus(`Error: password must be at least 8 characters`);
            setTimeout(() => setStatus(''),3000);
            return false;
          }
          return true;           
    }
  
    function handleCreate(){
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validatePassword(password, 'password')) return;
        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
            var res  = await fetch(url, {method: 'POST'});
            if (res.status === 200) {
                var data = await res.json();    
                console.log(data);        
                setShow(false);       
            } else {
                alert('User already exsists.')
            }
        })();
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }

    return (
        <Card style={{ backgroundColor: "lightgray", color: "black", width: "18rem" }}>
            <Card.Header>Create Account</Card.Header>
            <Card.Body>
                {show ? ( 
                    <>
                        Name<br/>
                        <input type="input" className="form-control" id="name" placeholder="Enter name" onChange={e => setName(e.currentTarget.value)} /><br/>
                        Email address<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter email" onChange={e => setEmail(e.currentTarget.value)}/><br/>
                        Password<br/>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={e => setPassword(e.currentTarget.value)}/><br/>
                        <button type="submit" className="btn btn-light" id="createButton" disabled={name === "" && email === "" && password === ""} onClick={handleCreate}>Create Account</button><br/>
                        {status}
                    </>
                    ):( 
                    <>
                        <h5>Success! Your account has been created.</h5>
                        <h6>Click <Link to="/login">here</Link> to login.</h6>
                    </> 
                    )}
            </Card.Body>
        </Card>
    );
    }

export default CreateAccount;
