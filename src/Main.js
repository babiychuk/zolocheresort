import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import HotelRoomsPage from "./components/HotelRoomsPage/HotelRoomsPage";
import HousesWaterPage from "./components/HousesWaterPage/HousesWaterPage";
import HousesLandPage from "./components/HousesLandPage/HousesLandPage";
import BanyaPage from "./components/BanyaPage/BanyaPage";
import About from "./components/About/About";
import FitnesPage from "./components/Fitnes/FitnesPage";
import SpaPage from "./components/Spa/SpaPage";
import Beaury365Page from "./components/Beaury365/Beaury365Page";
import RestoranPage from "./components/Restoran/RestoranPage";
import ContactsPage from "./components/Contacts/ContactsPage";


class Main extends React.Component {
    render() {
        return (
            <HashRouter basename='/'>
                <Route exact path='/' component={Home} />
                <Route path='/hotel/:room' component={HotelRoomsPage} />
                <Route path='/house-rent/house-on-water/:house?' component={HousesWaterPage} />      
                <Route path='/house-rent/house-on-land/:house?' component={HousesLandPage} />  
                <Route path='/banya' component={BanyaPage} />     
                <Route path='/about' component={About} />
                <Route path='/fitnes' component={FitnesPage} />      
                <Route path='/spa' component={SpaPage} />  
                <Route path='/beaury365' component={Beaury365Page} />     
                <Route path='/restoran' component={RestoranPage} /> 
                <Route path='/contacts' component={ContactsPage} />                            
            </HashRouter>
        );
    }
}

export default Main;

