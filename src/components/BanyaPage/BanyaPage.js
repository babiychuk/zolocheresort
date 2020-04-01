import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import ImgUrl1 from "../../img/banya/photo-1.jpg";
import ImgUrl2 from "../../img/banya/photo-2.jpg";
import ImgUrl3 from "../../img/banya/photo-3.jpg";
import ImgUrl4 from "../../img/banya/photo-4.jpg";
import ImgUrl5 from "../../img/banya/photo-5.jpg";
import ImgUrl6 from "../../img/banya/photo-6.jpg";
import ImgUrl7 from "../../img/banya/photo-7.jpg";

import './BanyaPage.css';

class BanyaPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: [ImgUrl1, ImgUrl2, ImgUrl3, ImgUrl4, ImgUrl5, ImgUrl6, ImgUrl7]
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="block_banya_H">

                    <Row>
                        <Col md="12" className="title title_p">
                            <p>БАНЯ НА ПОНТОНІ</p>
                        </Col>
                        <hr align="center" width="40%" size="1" color="#fff" />
                    </Row>

                    <Row className="m20">
                        <Col md="6" className="tabInfo">
                            <Row className="text">
                                <Col md="6" className="priceRoom">
                                    Ціна у <b>будній день</b>:
                                    <ul>
                                        <li> Пн.-Чт. до 15.00 - 3 500грн. (3 години / 4 чол.)</li>
                                        <li> Пн.-Чт. після 15.00 - 5 000 грн. (3 години / 4 чол.)</li>
                                    </ul>
                                </Col>
                                <Col md="6" className="priceRoom_holiday">
                                    Ціна у <b>вихідний день</b>:
									<ul>
                                        <li>Пт.-Нд.  до 15.00 - 5 000 грн. (3 години / 4 чол.)</li>
                                        <li>Пт.-Нд.  після 15.00 - 7 000 грн. (3 години / 4 чол.)</li>
                                    </ul>
                                </Col>
                                <Col md="12">
                                    <span className="gold_color">Сучасна баня на пантоні</span> обладнана найсучасними банними
                                    технологіями"
                                    має світлу парну оснащенну усім необхідним банний приладдям. Зона відпочинку (сінна
                                    релакс кімната)
                                    площею 10 м² має велике двоспальне ліжко. У ванній кімнаті душова кабіна.
                                    Великий мебльований зал з каміном та видом на Дніпро
                                </Col>
                                <Col md="12"><b>Розмір банної кімнати</b> 10 м² </Col>
                                <Col md="12"><span className="green_color">Безкоштовний Wi-Fi!</span></Col>
                                <Col md="12"><b>Паління:</b> <span className="red_color">заборонено</span></Col>
                                <Col md="12"><span className="green_color">Безкоштовна приватна парковка</span></Col>
                                <Row>
                                    <Col md="6">
                                        <ul>
                                            <p><b>У вартість влючено:</b></p>
                                            <li>Парна</li>
                                            <li>Басейн</li>
                                            <li>Чай травяний та бублики</li>
                                            <li>Набір для бані (простирадло, халат, капці, шапка)</li>
                                            <li>Сінна релакс кімната</li>
                                            <li>Дубова діжка для проведення контрастних процедур ( тепло-холод)</li>
                                            <li>Зволожуюча олійка для тіла</li>
                                            <li>Сейф</li>
                                        </ul>
                                    </Col>
                                    <Col md="6">
                                        <ul>
                                            <p><b>Додаткові послуги:</b></p>
                                            <li>Пропарка - 300 грн. (до 15 хв.)</li>
                                            <li>Скраб – 300 грн. (сіль, мед, цитрусові)</li>
                                            <li>Масаж- 400 грн. (30 хв.) / 700 грн. (60 хв.)</li>
                                            <li>Віник - 100 грн.</li>
                                            <li>Міні бар сплачується додатково</li>
                                        </ul>
                                    </Col>
                                    <Col md="6">
                                        <ul>
                                            <p><b>У парній кімнаті:</b></p>
                                            <li>Купіль</li>
                                            <li>Дубова діжка </li>
                                            <li>Басейн</li>
                                            <li>Туалет</li>
                                        </ul>
                                    </Col>
                                    <Col md="6">
                                        <ul>
                                            <p><b>Вид:</b></p>
                                            <li>Вид на р.Дніпро</li>
                                            <li>Вид на фонтани</li>
                                            <li>Вид на басейн</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>

                        <Col md="6">
                            <Col md="12">
                                <Carousel interval={2000}>
                                    {this.state.imgs.map((img, num) => (
                                        <Carousel.Item key={num}>
                                            <Row>
                                                <Col lg="12">
                                                    <img className="carouselImg" alt="Стандарт" src={img} />
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        );
    }
}

export default BanyaPage;
