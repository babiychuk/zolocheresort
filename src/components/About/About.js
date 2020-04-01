import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import ImgUrl1 from "../../img/about/photo-1.jpg";
import ImgUrl2 from "../../img/about/photo-2.jpg";
import ImgUrl3 from "../../img/about/photo-3.jpg";
import ImgUrl4 from "../../img/about/photo-4.jpg";
import ImgUrl5 from "../../img/about/photo-5.jpg";
import ImgUrl6 from "../../img/about/photo-6.jpg";
import ImgUrl7 from "../../img/about/photo-7.jpg";
import ImgUrl8 from "../../img/about/photo-8.jpg";
import ImgUrl9 from "../../img/about/photo-9.jpg";
import ImgUrl10 from "../../img/about/photo-10.jpg";
import ImgUrl11 from "../../img/about/photo-11.jpg";
import ImgUrl12 from "../../img/about/photo-12.jpg";
import ImgUrl13 from "../../img/about/photo-13.jpg";
import ImgUrl14 from "../../img/about/photo-14.jpg";
import ImgUrl15 from "../../img/about/photo-15.jpg";

import './About.css';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: [ImgUrl1, ImgUrl2, ImgUrl3, ImgUrl4, ImgUrl5, ImgUrl6, ImgUrl7, ImgUrl8, ImgUrl9, ImgUrl10, ImgUrl11, ImgUrl12, ImgUrl13, ImgUrl14, ImgUrl15]
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="block_about">

                    <Row>
                        <Col md="12" className="title title_p">
                            <p>ПРО НАС</p>
                        </Col>
                        <hr align="center" width="40%" size="1" color="#fff" />
                    </Row>

                    <Row>
                        <Row className="m35 tabInfo">
                            <Col md="6">
                                <p className="titleAbout">Riviera Zoloche Resort & SPA</p>
                                <p className="titleAbout">Острівець комфорту серед буйства природи для сімейного відпочинку та
                                        дозвілля</p>
                                <p><span className="gold_color">Riviera Zoloche Resort</span> - це частина комплексу Zoloche, розташована на березі Дніпра
                                        і орієнтована на здачу будинків та готельних номерів в оренду. Затишні будиночки на березі Дніпра, романтичні будинки
                                        на плаву та сучасні готельні номери подарують відчуття повного єднання з природою далеко від гамірного міста.
                                        Дизайн  виконаний в сучасному стилі, будинки та номери обладнані усім необхідним: зручними меблями, посудом,
                                        побутовою технікою. Розкішний краєвид, повний релакс та максимальний затишок вам подарують комфортабельні тераси</p>
                            </Col>
                            <Col md="6">
                                <Col md="12">
                                    <Carousel interval={2000}>
                                        {this.state.imgs.map((img, num) => (
                                            <Carousel.Item key={num}>
                                                <Row>
                                                    <Col lg="12">
                                                        <img className="carouselImg" key={num} alt="Стандарт" src={img} />
                                                    </Col>
                                                </Row>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Col>
                            </Col>
                        </Row>
                    </Row>


                    <Row className="m10-0">
                        <Col md={{ span: 2, offset: 1 }} className=" col-md-offset-1 bigInfo m-r10">
                            <div>800</div>
                            Домів
                            </Col>
                        <Col md="2" className="bigInfo m-r10">
                            <div>100га</div>
                            Загальна територія
                            </Col>
                        <Col md="2" className="bigInfo m-r10">
                            <div>100</div>
                            Людей обслуговуючого персоналу
                            </Col>
                        <Col md="2" className="bigInfo m-r10">
                            <div>160</div>
                            Людей охорони
                            </Col>
                        <Col md="2" className="bigInfo m-r10">
                            <div>10км</div>
                            Протяжність комплексу
                            </Col>
                    </Row>

                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
