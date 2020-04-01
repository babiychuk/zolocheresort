import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Spa from "./Spa";

class SpaPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Spa />
                <Footer />
            </div>
        );
    }
}

export default SpaPage;