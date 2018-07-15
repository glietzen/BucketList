import React, {Component} from 'react';
import {Row, Col, Card} from 'react-materialize';
import './Landing.css';
import Greeting from "../../Greeting/Greeting";
import img1 from './images/background.jpg';
import img2 from './images/Buds.jpg';
import img3 from './images/couple.jpg';
import img4 from './images/family.jpg';
import img5 from './images/macchuPicchu.jpg';
import img6 from './images/moreBuds.jpeg';
import img7 from './images/river.jpg';
import img8 from './images/stock.jpeg';
import img9 from './images/templeBuds.jpeg';
import img10 from './images/multiBuds.jpeg';
import img11 from './images/Buds3.jpeg';
import img12 from './images/scenery.jpeg';


class Landing extends Component {
    render () {
        return (
           <div>
               <Card className="Card" />
                <div className="landingContainer">
                    <div className="Row">
                    <Row>
                        <Col s={1} l={3}><img src={img1} className= 'image' alt='plane' /></Col>
                        <Col s={1} l={3}><img src={img2} className= 'image' alt='buds' /></Col>
                        <Col s={1} l={3}><img src={img3} className= 'image' alt='couple' /></Col>
                        <Col s={1} l={3}><img src={img4} className= 'image' alt='family' /></Col>
                    </Row>
                    <Row>
                        <Col s={1} l={3}><img src={img5} className= 'image' alt='macchu' /></Col>
                        <Col s={1} l={3}><img src={img6} className= 'image' alt='moreBuds'/></Col>
                        <Col s={1} l={3}><img src={img7} className= 'image' alt='river' /></Col>
                        <Col s={1} l={3}><img src={img8} className= 'image' alt='stock'/></Col>
                    </Row>
                    <Row>
                        <Col s={1} l={3}><img src={img9} className= 'image' alt='templeBuds'/></Col>
                        <Col s={1} l={3}><img src={img10} className= 'image' alt='multiBuds' /></Col>
                        <Col s={1} l={3}><img src={img11} className= 'image' alt='Buds3' /></Col>
                        <Col s={1} l={3}><img src={img12} className= 'image' alt='scenery' /></Col>
                    </Row>
                    </div>
                    
                </div>
           </div>
        )

    }
}

export default Landing;