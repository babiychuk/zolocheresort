import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './Restoran.css';

import Photo1 from "../../img/restoran/photo-1.jpg";
import Photo2 from "../../img/restoran/photo-2.jpg";
import Photo3 from "../../img/restoran/photo-3.jpg";
import Photo4 from "../../img/restoran/photo-4.jpg";
import Photo5 from "../../img/restoran/photo-5.jpg";
import Photo6 from "../../img/restoran/photo-6.jpg";
import Photo7 from "../../img/restoran/photo-7.jpg";
import Photo8 from "../../img/restoran/photo-8.jpg";
import Photo9 from "../../img/restoran/photo-9.jpg";
import Photo10 from "../../img/restoran/photo-10.jpg";
import Photo11 from "../../img/restoran/photo-11.jpg";
import Photo12 from "../../img/restoran/photo-12.jpg";
import Photo13 from "../../img/restoran/photo-13.jpg";
import Photo14 from "../../img/restoran/photo-14.jpg";
import Photo15 from "../../img/restoran/photo-15.jpg";
import Photo16 from "../../img/restoran/photo-16.jpg";
import Photo17 from "../../img/restoran/photo-17.jpg";
import Photo18 from "../../img/restoran/photo-18.jpg";
import Photo19 from "../../img/restoran/photo-19.jpg";
import Photo20 from "../../img/restoran/photo-20.jpg";
import Photo21 from "../../img/restoran/photo-21.jpg";
import Photo22 from "../../img/restoran/photo-22.jpg";
import Photo23 from "../../img/restoran/photo-23.jpg";
import Photo24 from "../../img/restoran/photo-24.jpg";
import Photo25 from "../../img/restoran/photo-25.jpg";
import Photo26 from "../../img/restoran/photo-26.jpg";
import Photo27 from "../../img/restoran/photo-27.jpg";


class Restoran extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10, Photo11, Photo12, Photo13, Photo14, Photo15, Photo16, Photo17, Photo18, Photo19, Photo20, Photo21, Photo22, Photo23, Photo24, Photo25, Photo26, Photo27]
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
            <div className="block_restoran" name="restoran">

                <Row>
                    <Col md="12" className="title title_p">
                        <p>РЕСТОРАН Zafferano</p>
                    </Col>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </Row>

                <Row>
                    <Col md="12">
                        <div className="text_in_block bg_hotelRooms">
                            <p className="">
                                Ресторан сім'ї la Famiglia, Zafferano приймає своїх гостей в
                                мальовничому місці, пригощаючи стравами італійської кухні. В ресторані
                                так само можна придбати вишукані продукти в гастрономічній
                                крамниці. Є відмінною локацією для проведення урочистих
                                заходів
                            </p>
                        </div>
                    </Col>
                </Row>
                <Slider {...settingSlide} className="m20">
                    {this.state.imgs.map((img, num) => (
                        <div key={num}>
                            <img className="carouselImg" alt="Restoran Zafferano" src={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Restoran;
