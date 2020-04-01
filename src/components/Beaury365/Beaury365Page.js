import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Beaury365 from "./Beaury365";

class Beaury365Page extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Beaury365 />
                <Footer />
            </div>
        );
    }
}

export default Beaury365Page;