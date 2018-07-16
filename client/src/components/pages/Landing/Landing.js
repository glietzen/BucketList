import React, {Component} from 'react';
import {Row, Col, Card, CardTitle, Button} from 'react-materialize';
import './Landing.css';
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
import logo from './images/bucket3.png';


class Landing extends Component {
    render () {
        return (
            <div>
                <div className="landingContainer">
                    <Card className="cardLanding" 
                    header={<CardTitle className="titleLanding">BucketList<img className="logo" src={logo} height="25px" width="25px"></img></CardTitle>}
                    actions={[<Button waves='light' className="button1" node='a' href='./Register'>REGISTER</Button> ,
                            <Button waves='light' className="button2" node='a' href='./LOGIN'>LOGIN</Button>]}>
                        <span className="firstLine">ACROSS THE ROAD</span><br></br>
                        <span className="secondLine"> or AROUND THE WORLD...</span><br></br>
                        <span className="thirdLine">EXPLORE YOUR WAY!</span>
            </Card>
                <div className="Row">
                
                        <Row>
                            <Col s={1} m={2} l={3}><img src={img1} className= 'image' alt='plane' /></Col>
                            <Col s={1} m={2} l={3}><img src={img2} className= 'image' alt='buds' /></Col>
                            <Col s={1} m={2} l={3}><img src={img3} className= 'image' alt='couple' /></Col>
                            <Col s={1} m={2} l={3}><img src={img4} className= 'image' alt='family' /></Col>
                        </Row>
                        <Row>
                            <Col s={1} m={2} l={3}><img src={img5} className= 'image' alt='macchu' /></Col>
                            <Col s={1} m={2} l={3}><img src={img6} className= 'image' alt='moreBuds'/></Col>
                            <Col s={1} m={2} l={3}><img src={img7} className= 'image' alt='river' /></Col>
                            <Col s={1} m={2} l={3}><img src={img8} className= 'image' alt='stock'/></Col>
                        </Row>
                        <Row>
                            <Col s={1} m={2} l={3}><img src={img9} className= 'image' alt='templeBuds'/></Col>
                            <Col s={1} m={2} l={3}><img src={img10} className= 'image' alt='multiBuds' /></Col>
                            <Col s={1} m={2} l={3}><img src={img11} className= 'image' alt='Buds3' /></Col>
                            <Col s={1} m={2} l={3}><img src={img12} className= 'image' alt='scenery' /></Col>
                        </Row>
                        </div>
                
                   
            </div>
        </div>
        )

    }
}

export default Landing;