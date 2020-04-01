import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './HousesWater.css';

import House9 from "../../img/housesWater/house-9.jpg";
import House10 from "../../img/housesWater/house-10.jpg";
import House11 from "../../img/housesWater/house-11.jpg";



class HousesWater extends React.Component {
    render() {
        return (
            <div className="block_housesWater">

                <div>
                    <div className="title title_p">
                        <p>БУДИНКИ НА ВОДІ</p>
                    </div>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </div>

                <div className="row">
                    <div className="col-md-12 ">
                        <div className="text_in_block bg_housesWater">
                            <div>
                                Сучасний одноповерховий будинок на плаву з пласким дахом., площею 120 м².
                                В будинку розташована кухня, обідня зона, вітальня, кабінет з розкладним диваном.
                                Дві просторі спальні, дві ванні кумнати. Затишна мабльована терраса не лише з шикарним видом
                                на Дніпро,
                                а й розташована над водою. На даху також розташована тераса площею 90 м² з меблями для
                                відпочинку
                            </div>
                        </div>          
                    </div>
                </div>

                <Row>
                    <Col lg="4">
                        <div className="photobox_housesWater photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House9} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesWater">Будинок на воді №9</span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 6 800 грн</p>
								    <a href="#/house-rent/house-on-water/house9">
									    <div className="btn btn-outline bg_housesWater">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_housesWater photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House10} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesWater">Будинок на воді №10 </span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 6 800 грн</p>
								    <a href="#/house-rent/house-on-water/house10">
									    <div className="btn btn-outline bg_housesWater">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_housesWater photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House11} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesWater">Будинок на воді №11</span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 6 800 грн</p>
								    <a href="#/house-rent/house-on-water/house11">
									    <div className="btn btn-outline bg_housesWater">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HousesWater;
