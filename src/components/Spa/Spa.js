import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './Spa.css';

import Photo1 from "../../img/spa/photo-1.jpg";
import Photo2 from "../../img/spa/photo-2.jpg";
import Photo3 from "../../img/spa/photo-3.jpg";
import Photo4 from "../../img/spa/photo-4.jpg";
import Photo5 from "../../img/spa/photo-5.jpg";
import Photo6 from "../../img/spa/photo-6.jpg";


class Spa extends React.Component {
    
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
            <div className="block_spa" name="spa">

                <Row>
                    <Col md="12" className="title title_p">
                        <p>SPA</p>
                    </Col>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </Row>

                <Row>
                    <Col md="12">
                        <div className="text_in_block bg_hotelRooms">
                            <p className="">
                                SPA-зона порадує любителів усамітненого відпочинку відмінною сауною з унікальним
                                мікрокліматом і легким ароматом канадського кедра. Для охочих більш низьких температур
                                є хамам і джакузі. SPA-зона закривається виключно під замовника, максимальна місткість до 6
                                осіб
						</p>
                            <Row>
                                <Col md="6">
                                    <ul>Вартість:
									<li>4 000 грн./ 2 год.</li>
                                        <li>Кожна наступна година – 2 000 грн.</li>
                                    </ul>
                                </Col>
                                <Col md="6">

                                    <ul>У вартість включено:
									<li>Сауна, хамам, джукузі, дубова діжка для контакстних процедур, ергономічні лавки
									</li>
                                        <li>Набір для СПА (халат, капці, полотенце)</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">

                                    <ul>Додаткові послуги:
									<li>масаж від 500 грн.</li>
                                        <li>обгортування (шоколад, віскі) від 1 000 грн.</li>
                                        <li>обслуговування з ресторану Zafferano сплачується за цінами меню ресторану.</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Slider {...settingSlide} className="m20">
                    {this.state.imgs.map((img, num) => (
                        <div>
                            <img className="carouselImg" alt="photo" src={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Spa;
