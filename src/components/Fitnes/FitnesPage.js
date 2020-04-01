import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Fitnes from "./Fitnes";

class FitnesPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Fitnes />
                <Footer />
            </div>
        );
    }
}

export default FitnesPage;
