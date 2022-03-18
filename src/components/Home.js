import React from "react";

import Header from "./layout/home/Header";
import Daily from "./layout/home/Daily";
import Apy from "./layout/home/Apy";
import Protocol from "./layout/home/Protocol";
import Rewards from "./layout/home/Rewards";
import Stakes from "./layout/home/Stakes";
import Presale from "./layout/home/Presale";
import Footer from "./layout/home/Footer";

const Home = () => {
    return (
        <div id="home">
            <Header />

            <Daily />

            <Apy />

            <Protocol />

            <Rewards />

            <Stakes />

            <Presale />

            <Footer />
        </div>
    );
}

export default Home;