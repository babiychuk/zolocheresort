import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import ImgUrl1 from "../../img/hotelRooms/standart/standart-1.jpg";
import ImgUrl2 from "../../img/hotelRooms/standart/standart-2.jpg";
import ImgUrl3 from "../../img/hotelRooms/standart/standart-3.jpg";
import ImgUrl4 from "../../img/hotelRooms/standart/standart-4.jpg";

import Delux1 from "../../img/hotelRooms/delux/delux-1.jpg";
import Delux2 from "../../img/hotelRooms/delux/delux-2.jpg";
import Delux3 from "../../img/hotelRooms/delux/delux-3.jpg";
import Delux4 from "../../img/hotelRooms/delux/delux-4.jpg";
import Delux5 from "../../img/hotelRooms/delux/delux-5.jpg";
import Delux6 from "../../img/hotelRooms/delux/delux-6.jpg";
import Delux7 from "../../img/hotelRooms/delux/delux-7.jpg";

import Lux1 from "../../img/hotelRooms/lux/lux-1.jpg";
import Lux2 from "../../img/hotelRooms/lux/lux-2.jpg";
import Lux3 from "../../img/hotelRooms/lux/lux-3.jpg";
import Lux4 from "../../img/hotelRooms/lux/lux-4.jpg";
import Lux5 from "../../img/hotelRooms/lux/lux-5.jpg";
import Lux6 from "../../img/hotelRooms/lux/lux-6.jpg";
import Lux7 from "../../img/hotelRooms/lux/lux-7.jpg";
import Lux8 from "../../img/hotelRooms/lux/lux-8.jpg";

import './HotelRoomsPage.css';

class HotelRoomsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roomIndex: 1,
            rooms: [
                {
                    name: "Стандарт",
                    text: "Світлий номер, площею 22 м² з великим двоспальним ліжком. У ванній кімнаті душова кабіна. Велика мебльована тераса з видом на Дніпро",
                    imgs: [ImgUrl1, ImgUrl2, ImgUrl3, ImgUrl4],
                    price: "3 200",
                    priceWeekend: "3 800",
                    size: "22 м²"
                },
                {
                    name: "Напівлюкс",
                    text: "Світлий і просторий двокімнатний номер площею 46 м². Вікна та відкрита тераса з видом на Дніпро. Вітальня з барною стійкою, зручним диваном, великим телевізором. У спальні велике двоспальне ліжко, телевізор. У номері ванна кімната з ванною і душовою кабіною, є гостьовий санвузол",
                    imgs: [Delux1, Delux2, Delux3, Delux4, Delux5, Delux6, Delux7],
                    price: "4 500",
                    priceWeekend: "5 200",
                    size: "46 м²"
                },
                {
                    name: "Люкс",
                    text: "Світлий і просторий двокімнатний номер площею 53 м² з шикарним видом на Дніпро. Велика вітальня з панорамними вікнами і виходом на терасу, барною стійкою, телевізором і затишним диваном. затишна ванна кімната з великою ванною і душовою кабіною. У спальні велике двоспальне ліжко, телевізор",
                    imgs: [Lux1, Lux2, Lux3, Lux4, Lux5, Lux6, Lux7, Lux8],
                    price: "4 900",
                    priceWeekend: "5 600",
                    size: "53 м²"
                }
            ]
        };
    }

    componentDidMount () {
        switch (this.props.match.params.room) {
            case "standart":
                this.setState({roomIndex: 0});
              break;
            case "semilux":
                this.setState({roomIndex: 1});
              break;
            case "lux":
                this.setState({roomIndex: 2});
              break;            
            default:
                this.setState({roomIndex: 0});
          }      
       
    }

    render() { 
        return (
            <div>
                <Header />
                <div className="block_hotelRooms_H">
                        <Row>
                            <Col md="12" className="title title_p">
                                <p>ГОТЕЛЬНІ НОМЕРИ</p>
                            </Col>
                            <hr align="center" width="40%" size="1" color="#fff" />
                        </Row>

                        <Row>
                            <Col md="6" className="m20 m-t15">
                                <a className="backToMain" href="/" style={{ textDecoration: "none" }}>← На головну</a>
                            </Col>
                            <Col md="12" className="m20">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className={this.state.roomIndex === 0 ? 'active' : null}>
                                        <div className="nav-link" id="profile-tab" data-toggle="tab" onClick={()=>{this.setState({roomIndex: 0})}} role="tab" aria-controls="profile" aria-selected="false">Стандарт</div>
                                    </li>
                                    <li className={this.state.roomIndex === 1 ? 'active' : null}>
                                        <div className="nav-link " id="contact-tab" data-toggle="tab" onClick={()=>{this.setState({roomIndex: 1})}} role="tab" aria-controls="contact" aria-selected="false">Напівлюкс</div>
                                    </li>
                                    <li className={this.state.roomIndex === 2 ? 'active' : null}>
                                        <div className="nav-link" id="contact-tab" data-toggle="tab" onClick={()=>{this.setState({roomIndex: 2})}} role="tab" aria-controls="contact" aria-selected="false">Люкс</div>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="m20">
                            <Col md="6" className="tabInfo">
                                <Row className="text">
                                    <Col md="6" className="priceRoom">
                                        Ціна за ніч у <b>будній день</b>:
										    <p> {this.state.rooms[this.state.roomIndex].price} грн </p>
                                    </Col>
                                    <Col md="6" className="priceRoom_holiday">
                                        Ціна за ніч у <b>вихідний день</b>:
										    <p>{this.state.rooms[this.state.roomIndex].priceWeekend} грн </p>
                                    </Col>
                                    <Col md="12">
                                        <span className="gold_color">{this.state.rooms[this.state.roomIndex].name}.</span> 
                                        {this.state.rooms[this.state.roomIndex].text}
                                    </Col>
                                    <Col md="12"><b>Розмір номеру</b> {this.state.rooms[this.state.roomIndex].size}</Col>
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
                                                <li>Полотенця</li>
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
                                                <li>Телефон</li>
                                                <li>Телевізор</li>
                                                <li>Супутникові канали</li>
                                                <li>Електрочайник</li>
                                                <li>Послуга виклик таксі</li>
                                                <li>Послуга будильник</li>
                                            </ul>
                                        </Col>
                                        <Col md="6">
                                            <ul>
                                                <li>Кондиціонер</li>
                                                <li>Прасувальні приналежності</li>
                                                <li>Подовження ліжка (більше 2 метрів)</li>
                                                <li>Опалення</li>
                                                <li>Доступні сполучні кімнати</li>
                                                <li>Окремий вхід</li>
                                            </ul>
                                        </Col>
                                        <Col md="6">
                                            <ul>
                                                <li>Москітна сітка</li>
                                                <li>Шкаф</li>
                                                <li>Сейф</li>
                                                <li>Кавоварка/чайник</li>
                                                <li>Холодильник</li>
                                            </ul>
                                        </Col>
                                        <Col md="6">
                                            <ul >
                                                <li>Тераса</li>
                                                <li>Мармурова підлога</li>
                                                <li>Меблі на вулиці</li>
                                                <li>Обідня зона на вулиці</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>

                            <Col md="6">
                                <Col md="12">
                                    <Carousel interval={2000}>
                                        {this.state.rooms[this.state.roomIndex].imgs.map((img, num) => (
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

export default HotelRoomsPage;
