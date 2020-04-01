import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './Fitnes.css';

import Photo1 from "../../img/fitnes/photo-1.jpg";
import Photo2 from "../../img/fitnes/photo-2.jpg";
import Photo3 from "../../img/fitnes/photo-3.jpg";
import Photo4 from "../../img/fitnes/photo-4.jpg";
import Photo5 from "../../img/fitnes/photo-5.jpg";
import Photo6 from "../../img/fitnes/photo-6.jpg";
import Photo7 from "../../img/fitnes/photo-7.jpg";
import Photo8 from "../../img/fitnes/photo-8.jpg";


class Fitnes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8]
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
            <div className="block_fitnes" name="fitnes">

                <Row>
                    <Col md="12" className="title title_p">
                        <p>ФІТНЕС</p>
                    </Col>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </Row>

                <Row>
                    <Col md="12">
                        <div className="text_in_block bg_hotelRooms">
                            <p className="">
                                Фітнес зал представляє собою невелику площу з американськими тренажерами для всіх груп
                                м'язів,
                                кардіо зоною з видом на Дніпро
						</p>
                            <div className="">
                                Вартість:
							<ul>
                                    <li>Однарозовий абонемент 1200 грн.</li>
                                    <li>Тренер 500 грн.</li>
                                    <li>Абонемент для жителів містечка: 6 міс. – 28 000 грн. , 12 міс. – 42 000 грн.</li>
                                    <li>Абонемент для гостей містечка: 6 міс. – 32 000 грн., 12 міс. – 55 000 грн.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Slider {...settingSlide} className="m20">
                    {this.state.imgs.map((img, num) => (
                        <div key={num}>
                            <img className="carouselImg" alt="Fitnes" src={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Fitnes;
