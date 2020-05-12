import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import House9_1 from "../../img/housesWater/house-9/photo-1.jpg";
import House9_2 from "../../img/housesWater/house-9/photo-2.jpg";
import House9_3 from "../../img/housesWater/house-9/photo-3.jpg";
import House9_4 from "../../img/housesWater/house-9/photo-4.jpg";
import House9_5 from "../../img/housesWater/house-9/photo-5.jpg";
import House9_6 from "../../img/housesWater/house-9/photo-6.jpg";
import House9_7 from "../../img/housesWater/house-9/photo-7.jpg";
import House9_8 from "../../img/housesWater/house-9/photo-8.jpg";
import House9_9 from "../../img/housesWater/house-9/photo-9.jpg";
import House9_10 from "../../img/housesWater/house-9/photo-10.jpg";
import House9_11 from "../../img/housesWater/house-9/photo-11.jpg";
import House9_12 from "../../img/housesWater/house-9/photo-12.jpg";
import House9_13 from "../../img/housesWater/house-9/photo-13.jpg";
import House9_14 from "../../img/housesWater/house-9/photo-14.jpg";
import House9_15 from "../../img/housesWater/house-9/photo-15.jpg";
import House9_16 from "../../img/housesWater/house-9/photo-16.jpg";

import House10_1 from "../../img/housesWater/house-10/photo-1.jpg";
import House10_2 from "../../img/housesWater/house-10/photo-2.jpg";
import House10_3 from "../../img/housesWater/house-10/photo-3.jpg";
import House10_4 from "../../img/housesWater/house-10/photo-4.jpg";
import House10_5 from "../../img/housesWater/house-10/photo-5.jpg";
import House10_6 from "../../img/housesWater/house-10/photo-6.jpg";
import House10_7 from "../../img/housesWater/house-10/photo-7.jpg";
import House10_8 from "../../img/housesWater/house-10/photo-8.jpg";
import House10_9 from "../../img/housesWater/house-10/photo-9.jpg";
import House10_10 from "../../img/housesWater/house-10/photo-10.jpg";
import House10_11 from "../../img/housesWater/house-10/photo-11.jpg";
import House10_12 from "../../img/housesWater/house-10/photo-12.jpg";
import House10_13 from "../../img/housesWater/house-10/photo-13.jpg";
import House10_14 from "../../img/housesWater/house-10/photo-14.jpg";
import House10_15 from "../../img/housesWater/house-10/photo-15.jpg";
import House10_16 from "../../img/housesWater/house-10/photo-16.jpg";
import House10_17 from "../../img/housesWater/house-10/photo-17.jpg";
import House10_18 from "../../img/housesWater/house-10/photo-18.jpg";
import House10_19 from "../../img/housesWater/house-10/photo-19.jpg";
import House10_20 from "../../img/housesWater/house-10/photo-20.jpg";
import House10_21 from "../../img/housesWater/house-10/photo-21.jpg";
import House10_22 from "../../img/housesWater/house-10/photo-22.jpg";
import House10_23 from "../../img/housesWater/house-10/photo-23.jpg";
import House10_24 from "../../img/housesWater/house-10/photo-24.jpg";
import House10_25 from "../../img/housesWater/house-10/photo-25.jpg";
import House10_26 from "../../img/housesWater/house-10/photo-26.jpg";
import House10_27 from "../../img/housesWater/house-10/photo-27.jpg";

import House11_1 from "../../img/housesWater/house-11/photo-1.jpg";
import House11_2 from "../../img/housesWater/house-11/photo-2.jpg";
import House11_3 from "../../img/housesWater/house-11/photo-3.jpg";
import House11_4 from "../../img/housesWater/house-11/photo-4.jpg";
import House11_5 from "../../img/housesWater/house-11/photo-5.jpg";
import House11_6 from "../../img/housesWater/house-11/photo-6.jpg";
import House11_7 from "../../img/housesWater/house-11/photo-7.jpg";
import House11_8 from "../../img/housesWater/house-11/photo-8.jpg";
import House11_9 from "../../img/housesWater/house-11/photo-9.jpg";
import House11_10 from "../../img/housesWater/house-11/photo-10.jpg";
import House11_11 from "../../img/housesWater/house-11/photo-11.jpg";
import House11_12 from "../../img/housesWater/house-11/photo-12.jpg";
import House11_13 from "../../img/housesWater/house-11/photo-13.jpg";
import House11_14 from "../../img/housesWater/house-11/photo-14.jpg";
import House11_15 from "../../img/housesWater/house-11/photo-15.jpg";
import House11_16 from "../../img/housesWater/house-11/photo-16.jpg";
import House11_17 from "../../img/housesWater/house-11/photo-17.jpg";
import House11_18 from "../../img/housesWater/house-11/photo-18.jpg";
import House11_19 from "../../img/housesWater/house-11/photo-19.jpg";
import House11_20 from "../../img/housesWater/house-11/photo-20.jpg";
import House11_21 from "../../img/housesWater/house-11/photo-21.jpg";
import House11_22 from "../../img/housesWater/house-11/photo-22.jpg";
import House11_23 from "../../img/housesWater/house-11/photo-23.jpg";


import './HousesWaterPage.css';


class HousesWaterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            houseIndex: 0,
            houses: [
                [House9_1, House9_2, House9_3, House9_4, House9_5, House9_6, House9_7, House9_8, House9_9, House9_10, House9_11, House9_12, House9_13, House9_14, House9_15, House9_16],
                [House10_1, House10_2, House10_3, House10_4, House10_5, House10_6, House10_7, House10_8, House10_9, House10_10, House10_11, House10_12, House10_13, House10_14, House10_15, House10_16, House10_17,House10_18, House10_19, House10_20, House10_21, House10_22, House10_23, House10_24, House10_25, House10_26, House10_27],
                [House11_1, House11_2, House11_3, House11_4, House11_5, House11_6, House11_7, House11_8, House11_9, House11_10, House11_11, House11_12, House11_13, House11_14, House11_15, House11_16, House11_17,House11_18, House11_19, House11_20, House11_21, House11_22, House11_23]
            ]
        };
    }

    componentDidMount() {
        switch (this.props.match.params.house) {
            case "house9":
                this.setState({ houseIndex: 0 });
                break;
            case "house10":
                this.setState({ houseIndex: 1 });
                break;
            case "house11":
                this.setState({ houseIndex: 2 });
                break;

            default:
                this.setState({ houseIndex: 0 });
        }

    }

    render() {
        return (
            <div>
                <Header />
                <div className="block_housesWater_H">
                    <Row>
                        <Col md="12" className="title title_p">
                            <p>БУДИНКИ НА ВОДІ</p>
                        </Col>
                        <hr align="center" width="40%" size="1" color="#fff" />
                    </Row>
                    <Row>
                        <Col md="12" className="m20 nav-tabs_housesWater">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className={this.state.houseIndex === 0 ? 'active' : null}>
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" onClick={() => { this.setState({ houseIndex: 0 }) }} href="#/house-rent/house-on-water/house9" role="tab" aria-controls="profile" aria-selected="false">Будинок на воді №9</a>
                                </li>
                                <li className={this.state.houseIndex === 1 ? 'active' : null}>
                                    <a className="nav-link " id="contact-tab" data-toggle="tab" onClick={() => { this.setState({ houseIndex: 1 }) }} href="#/house-rent/house-on-water/house10" role="tab" aria-controls="contact" aria-selected="false">Будинок на воді №10</a>
                                </li>
                                <li className={this.state.houseIndex === 2 ? 'active' : null}>
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" onClick={() => { this.setState({ houseIndex: 2 }) }} href="#/house-rent/house-on-water/house11" role="tab" aria-controls="contact" aria-selected="false">Будинок на воді №11</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="m20">
                        <Col md="6" className="tabInfo">
                            <Row className="text">
                                <Col md="6" className="priceHouseWater">
                                    Ціна за ніч у <b>будній день</b>:
										    <p> 7 500 грн </p>
                                </Col>
                                <Col md="6" className="priceHouseWater_holiday">
                                    Ціна за ніч у <b>вихідний день</b>:
										    <p> 9 500 грн </p>
                                </Col>
                                <Col md="12">
                                Сучасний одноповерховий будинок на плаву з плоским дахом, площею 120 м². У будинку розташована кухня-їдальня, затишна вітальня, гардеробна кімната. Господарська спальня, спальня для гостей, гардеробна-кабінет і 2 ванні кімнати. Велика крита тераса з чудовим краєвидом на Дніпро. Родзинкою будинку є відкрита тераса на даху будинку, площею 90 м². Будинок побудований з екологічно чистих матеріалів з дизайнерським ремонтом, повністю мебльований, є вся необхідна побутова техніка. Опалення здійснюється за допомогою електрики, всі будинки підключені до центральної системи очищення стічних вод. Всі системи оснащені аварійним джерелом живлення (дизельний генератор), що виключає їх перебої в роботі. До ваших послуг: басейн (дорослий і дитячий) із зоною відпочинку, дитячий майданчик, дитячий ігровий центр, ресторан, фітнес-центр, спа-зона, салон краси.
                                </Col>
                                <Col md="12"><span className="green_color">Безкоштовний Wi-Fi!</span></Col>
                                <Col md="12"><b>Паління:</b> <span className="red_color">заборонено</span></Col>
                                <Col md="12"><span className="green_color">Безкоштовна приватна парковка</span></Col>
                                <Row>
                                    <Col md="6">
                                        <ul>
                                            <p><b>У ванній кімнаті:</b></p>
                                            <li>Душ</li>
                                            <li>Фен</li>
                                            <li>Туалет</li>
                                            <li>Туалетний набір</li>
                                            <li>Халат</li>
                                            <li>Капці</li>
                                            <li>Рушники</li>
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
                                    <Col md="6">
                                        <ul>
                                            <p><b>Послуги і зручності:</b></p>
                                            <li>Телевізор</li>
                                            <li>Супутникові канали</li>
                                            <li>Електрочайник</li>
                                            <li>Послуга - виклик таксі</li>
                                            <li>Послуга - будильник</li>
                                        </ul>
                                    </Col>
                                    <Col md="6">
                                        <ul>
                                            <li>Москітна сітка</li>
                                            <li>Шафа</li>
                                            <li>Сейф</li>
                                            <li>Кавоварка/чайник</li>
                                            <li>Холодильник</li>
                                        </ul>
                                    </Col>
                                    <Col md="6">
                                        <ul>
                                            <li>Кондиціонер</li>
                                            <li>Прасувальні приналежності</li>
                                            <li>Подовження ліжка (більше 2 метрів)</li>
                                            <li>Окремий вхід</li>
                                        </ul>
                                    </Col>
                                    <Col md="6">
                                        <ul >
                                            <li>Тераса</li>
                                            <li>Меблі на вулиці</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>

                        <Col md="6">
                            <Col md="12">
                                <Carousel interval={2000}>
                                    {this.state.houses[this.state.houseIndex].map((img, num) => (
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

export default HousesWaterPage;
