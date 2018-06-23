import React from "react";
import Nav from "../NavBar/NavBar";
import Cardlist from "../Cardlist/Cardlist"

const Home = () => (
    <div>
        <Nav />
        <div className="container">
            <Cardlist />
            <Cardlist />
            <Cardlist />
        </div>
    </div>
)

export default Home;