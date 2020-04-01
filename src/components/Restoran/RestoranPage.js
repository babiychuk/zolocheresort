import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Restoran from "./Restoran";

class RestoranPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Restoran />
                <Footer />
            </div>
        );
    }
}

export default RestoranPage;