import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./context";
import JSONPretty from 'react-json-pretty';


function AllData(){
  const userContext = useContext(UserContext);
  let users = userContext.state.users;
  let nav = document.getElementById("nav1");
  if (nav !== null) {
      document.getElementById("nav1").className = "nav-item";
      document.getElementById("nav2").className = "nav-item";
      document.getElementById("nav3").className = "nav-item";
      document.getElementById("nav4").className = "nav-item active";    
  }


  return (
    <Card style={{ backgroundColor: "lightsalmon", color: "black", width: "24rem" }}>
      <Card.Header>All Data in Store</Card.Header>
      <Card.Body>
        <JSONPretty id="json-pretty" data={users}></JSONPretty>
      </Card.Body>

    </Card>
    
  );
}

export default AllData;