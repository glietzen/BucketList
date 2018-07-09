import React from "react";
import {Card, CardTitle, Col} from 'react-materialize';
import './Cardlist.css';
import img from './image.jpg';
import imgComp from './completed.jpg';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import CompleteBtn from '../CompleteBtn/CompleteBtn';


const Cardlist = props => (
    <div>
        {props.itemsArray ? props.itemsArray.map(result => (
            <Col key={result._id} s={6} m={6} l={4}>
                <Card className='card' header={<CardTitle reveal image={!result.completed ? img : imgComp} className='places' waves='light'/>}
                    
                    title={result.title}
                    reveal={<p>{result.description ? result.description : "No description"}<br></br>
                        <DeleteBtn onClick={() => props.deleteItem(result._id)} /><br></br>
                        <CompleteBtn onClick={() => props.completeItem(result._id)} />
                        </p>}>
                    <p>{result.location}</p>
                    
                </Card>
            </Col>
        )): 
        <Card className='card' header={<CardTitle reveal image={img} className='places' waves='light'/>}
                
            title="title"
            reveal={<p>description</p>}>
            <p><a href="">link to activity</a></p>
        </Card>
        }
    </div>
);

export default Cardlist