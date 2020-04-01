import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from "../../img/logo.png";
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <Navbar className="headerNav" expand="lg">
                <Navbar.Brand className="brandLogo" href="/">
                    <img className="logo" src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-navbar" />
                <Navbar.Collapse id="menu-navbar">
                    <Nav className="menu">
                        <NavDropdown href="hotel" title="Готельні номери" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/hotel/standart">Стандартний</NavDropdown.Item>
                            <NavDropdown.Item href="/hotel/semilux">Напівлюкс</NavDropdown.Item>
                            <NavDropdown.Item href="/hotel/lux">Люкс</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Оренда будинків" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/house-rent/house-on-water">Будинки на воді</NavDropdown.Item>
                            <NavDropdown.Item href="/house-rent/house-on-land">Будинки на суші</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/banya">Баня<span id="blink7">NEW!</span></Nav.Link>
                        <NavDropdown title="ІНФРАСТРУКТУРА" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/fitnes">Фітнес</NavDropdown.Item>
                            <NavDropdown.Item href="/spa">SPA</NavDropdown.Item>
                            <NavDropdown.Item href="/beaury365">365 STUDIO</NavDropdown.Item>
                            <NavDropdown.Item href="/restoran">РЕСТОРАН Zafferano</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">ПРО НАС</Nav.Link>
                        <Nav.Link href="/contacts">КОНТАКТИ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
