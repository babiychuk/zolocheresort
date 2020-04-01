import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Contacts.css';

import Photo1 from "../../img/contacts/map.jpg";


class Contacts extends React.Component {
    render() {
        return (
            <div className="block_contacts" name="contacts">
                
                <Row>
                    <Col md="12" className="title title_p">
                        <p>Контакти</p>
                    </Col>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </Row>

                <Row>
                    <Row className="m35 tabInfo">
                        <Col md="6">
                            <p className="titleAbout">Riviera Zoloche Resort and Spa</p>
                            <p>До нас можна не тільки приїхати але і прилетіти або
								припливти, в цьому допоможе яхт-клуб і вертолітний майданчик на плаву.</p>
                            <Col md="12">
                                <b>Адреса:</b>
                                <p>
                                    Київська обл., Бориспільський р-н, с. Вишеньки, вул. Європейська, 1
                                </p >
                            </Col>
                            <Col md="12">
                                <ul className="ls-none">
                                    <p><b>Контакти:</b></p>
                                    <li><a href="tel:+380689949090">068 994 90 90</a> - Готель та фітнес</li>
                                    <li><a href="tel:+380979090044">097 909 00 44</a> - Лазня на понтоні</li>
                                    <li><a href="tel:+380674454529">067 445 45 29</a> - Ресторан "Zafferano"</li>
                                    <li><a href="tel:+380973651365">097 365 1 365</a> - Beauty studio "Zoloche 365"</li>
                                    <li><a href="tel:+380981046330">098 104 63 30</a> - Яхт-клуб</li>
                                    <li><a href="tel:+380990572777">099 057 27 77</a> - Zoloche taxi</li>
                                </ul>
                            </Col>
                        </Col>
                        <Col md="6">
                            <div className="p0-20">
                                <img className="carouselImg" alt="mapZoloche" src={Photo1} />
                            </div>
                        </Col>
                    </Row>
                </Row>
            </div>
        );
    }
}

export default Contacts;
