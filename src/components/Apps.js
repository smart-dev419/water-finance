import React from "react";

import Header from "./layout/app/Header";
import Treasury from "./layout/app/Treasury";
import Stake from "./layout/app/Stake";
import Withdraw from "./layout/app/Withdraw";
import Footer from "./layout/app/Footer";

const Apps = () => {
    return (
        <div id="apps">
            <Header />

            <Treasury />

            <Stake />

            <Withdraw />

            <Footer />
        </div>
    );
}

export default Apps;