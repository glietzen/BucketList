import React from "react";
import {Card, CardTitle, Collection, CollectionItem, Col} from 'react-materialize';
import './Cardlist.css';
import img from './image.jpeg';



const Cardlist = props => (
    <Collection>
        {props.listItems.map(item => (
            <CollectionItem key={item.id}>
                <Card className='card' header={<CardTitle reveal image={img} className='places' waves='light'/>}
                    title={item.title}
                    reveal={<p>{item.description}</p>}>
                    <p><a href="">link to activity</a></p>
                </Card>
            </CollectionItem>
        ))}
    </Collection>
)

export default Cardlist