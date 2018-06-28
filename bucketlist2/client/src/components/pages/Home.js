import React from "react";
import Nav from "../NavBar/NavBar";
import Cardlist from "../Cardlist/Cardlist";
import "./Home.css";
import {Row, Col} from 'react-materialize';

const Home = () => (
    <div className="backgroundColor">
        <Nav />
        <div className="container">
        <Row>
            <Col s={6} m={6} l={4}><Cardlist /></Col>
            <Col s={6} m={6} l={4}><Cardlist /></Col>
            <Col s={6} m={6} l={4}><Cardlist /></Col>
      
            <Col s={6} m={6} l={4}><Cardlist /></Col>
            <Col s={6} m={6} l={4}><Cardlist /></Col>
            <Col s={6} m={6} l={4}><Cardlist /></Col>
       
            <Col s={6} m={6} l={4}><Cardlist /></Col>
            <Col s={6} m={6} l={4}><Cardlist /></Col>
            <Col s={6} m={6} l={4}><Cardlist /></Col>
        </Row>
        </div>
    </div>
)

export default Home;