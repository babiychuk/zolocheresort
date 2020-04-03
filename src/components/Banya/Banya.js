import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './Banya.css';

import Photo1 from "../../img/banya/photo-1.jpg";
import Photo2 from "../../img/banya/photo-2.jpg";
import Photo3 from "../../img/banya/photo-3.jpg";
import Photo4 from "../../img/banya/photo-4.jpg";
import Photo5 from "../../img/banya/photo-5.jpg";
import Photo6 from "../../img/banya/photo-6.jpg";


class Banya extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6]
        };
    }

    render() {
        const settingSlide = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
        };
        return (
            <div className="block_banya">

                <div>
                    <div className="title title_p">
                        <p>Баня на понтоні</p>
                    </div>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </div>

                <Row >
                    <Col md="12">
                        <div className="text_in_block bg_hotelRooms">
                            <p> На березі Дніпра у поєднанні з природою, сучасний острівець для відновлення зв‘язку душі і
                            тіла. Баня на понтоні в Riviera Zoloche Resort & SPA. Це місце де можна зустрітися з друзями
                            та в приємній компанії відпочити з користю для здоров’я, відновити сили, зміцнити імунітет,
                            знайти натхнення.
                            До ваших послуг класична лазня на дровах, вимощена деревиною дикої липи, з повним комплексом
                            самих правильних заходів щоб зробити ваш відпочинок не лише приємним але і максимально
                            корисним.
                            </p>
                            <div>
                                <Col md="12">
                                    <ul>Отже, ми пропонуємо рухатись за планом найприємнішого оздоровлення:
										<li>Нам потрібно 3-4 години</li>
                                        <li>Спочатку ми трішки зігріємося і адаптуємося до високої температури</li>
                                        <li>Душ та насолоджуємося смачним чайком у чайній кімнаті та непомітно для себе
                                        відновлюємо
											баланс рідини у власному тілі</li>
                                        <li>Час пропарити ноги та подихати запашними травами що випаруються з каміння
										</li>
                                        <li>Знов час для чаю та пряника</li>
                                        <li>І ось найприємніша частина - чом би не пропарити все тіло та й гарним
                                        віничком. Таку
											приємність не гріх повторити 2-3 рази</li>
                                        <li>А чередувати пропарку ми пропонуємо занурюючись у дубову діжку чи басейн з
                                        прохолодною
											водою</li>
                                        <li>Якщо є бажання то можна отримати ряд косметичних процедур, скрабів,
											обгортань чи масажу</li>
                                        <li>І розслабитися у сінній кімнаті насолоджуючись ароматами польових трав</li>
                                        <li>Саме головне - повернутися до нас знову!</li>
                                    </ul>
                                </Col>
                            </div>


                            <a href="#/banya">
                                <div className="btn btn-outline bg_hotelRooms">Детальніше</div>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Slider {...settingSlide} className="m20">
                    {this.state.imgs.map((img, num) => (
                        <div key={num}>
                            <img className="carouselImg" alt="Banya" src={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Banya;
