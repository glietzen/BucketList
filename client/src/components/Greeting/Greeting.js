import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import './Greeting.css';

class Card extends Component {
    render() {
        return (
            <Col m={6} s={12}>
                <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
                I am a very simple card.
                </Card>
            </Col>
        )
}
}

export default Card;