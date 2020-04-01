import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './Beaury365.css';

import Photo1 from "../../img/365/photo-1.jpg";
import Photo2 from "../../img/365/photo-2.jpg";
import Photo3 from "../../img/365/photo-3.jpg";


class Beaury365 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: [Photo1, Photo2, Photo3]
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
            <div className="block_365" name="365">

                <Row>
                    <Col md="12" className="title title_p">
                        <p>Beauty студія «Zoloche 365»</p>
                    </Col>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </Row>

                <Row >
                    <Col md="12">
                        <div className="text_in_block bg_hotelRooms">
                            <p className="">
                                365 STUDIO - мережа студій краси нового покоління.
    
                                Це місце сили, наповнення, турботи про вашу красу і ваше здоров'я! серед
                                послуг представлені - манікюр, педикюр, укладання, фарбування, стрижки,
                                мейкап, лікування волосся, догляд за бровами (корекція та фарбування), массаж.В
                                студії використовуються максимально безпечні для людини бренди - Luxio,
                                Davines, NCLA, ONIQ, Zoya, American Crew. У всіх студіях 365 продається
    
                                натуральна косметика з Балі - Sensatia Botanicals.
						</p>
                        </div>
                    </Col>
                </Row>

                <Slider {...settingSlide} className="m20">
                    {this.state.imgs.map((img, num) => (
                        <div key={num}>
                            <img className="carouselImg" alt="365 studio" src={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Beaury365;
