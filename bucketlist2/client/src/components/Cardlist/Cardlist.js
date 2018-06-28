import React from "react";
import {Card, CardTitle} from 'react-materialize';
import img from "./image.jpeg";
import './Cardlist.css';



const Cardlist = () => (
    <Card className='card' header={<CardTitle reveal image={img} className='places' waves='light'/>}
        title="Here is the activity" 
        reveal={<p>Here is any details about the activity, from the API or form...</p>}>
        <p><a href="">Link to activity</a></p>
    </Card>
)

export default Cardlist