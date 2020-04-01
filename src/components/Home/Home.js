import React from "react";
import Header from "../Header/Header";
import FirstBlock from "../FirstBlock/FirstBlock";
import HotelRooms from "../HotelRooms/HotelRooms";
import HousesWater from "../HousesWater/HousesWater";
import HousesLand from "../HousesLand/HousesLand";
import Banya from "../Banya/Banya";
import Infracstraction from "../Infracstraction/Infracstraction";
import Fitnes from "../Fitnes/Fitnes";
import Spa from "../Spa/Spa";
import Beaury365 from "../Beaury365/Beaury365";
import Restoran from "../Restoran/Restoran";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";









import './Home.css';
import '../../style/css/media.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <FirstBlock />
                <HotelRooms /> 
                <HousesWater /> 
                <HousesLand />
                <Banya />    
                <Infracstraction />  
                <Fitnes />  
                <Spa />   
                <Beaury365 />
                <Restoran />
                <Contacts />
                <Footer />
            </div>
        );
    }
}

export default Home;
