import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Contacts from "./Contacts";

class ContactsPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Contacts />
                <Footer />
            </div>
        );
    }
}

export default ContactsPage;