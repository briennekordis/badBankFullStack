import React from 'react';
import { Card } from "react-bootstrap";
import banklogo from "../images/bank.png";

if (document.getElementById("nav-section1") !== null) {
    document.getElementById("nav1").className = "nav-item";
    document.getElementById("nav2").className = "nav-item";
}
if (document.getElementById("nav-section2") !== null) {
    document.getElementById("nav3").className = "nav-item";
    document.getElementById("nav4").className = "nav-item";
}
if (document.getElementById("nav-section3") !== null) {
    document.getElementById("nav5").className = "nav-item";
    document.getElementById("nav6").className = "nav-item";
}


function Home() {
        return (
            <Card style={{ backgroundColor: "lavender", color: "black", width: "18rem" }}>
                <Card.Header>badBank Home Page</Card.Header>
                <Card.Img variant="top" src={banklogo} alt="Responsive image" className="img-fluid"/>
                <Card.Body>
                    <Card.Title>Welcome to the badBank</Card.Title>
                    <Card.Text>
                        You can move around using the navigation bar to check your balance, deposit into your account, or withdraw funds.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

export default Home;