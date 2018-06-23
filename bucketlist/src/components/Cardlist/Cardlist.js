import React from "react";
import {Card, CardTitle} from 'react-materialize'



const Cardlist = () => (
    <Card header={<CardTitle reveal image={"../../images/image.jpeg"} waves='light'/>}
        title="Here is the activity"
        reveal={<p>Here is any details about the activity, from the API or form...</p>}>
        <p><a href="">link to activity</a></p>
    </Card>
)

export default Cardlist