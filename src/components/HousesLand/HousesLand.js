import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './HousesLand.css';

import House2 from "../../img/housesLand/housesLand-2.jpg";
import House3 from "../../img/housesLand/housesLand-3.jpg";
import House4 from "../../img/housesLand/housesLand-4.jpg";
import House5 from "../../img/housesLand/housesLand-5.jpg";
import House6 from "../../img/housesLand/housesLand-6.jpg";
import House7 from "../../img/housesLand/housesLand-7.jpg";
import House8 from "../../img/housesLand/housesLand-8.jpg";



class HousesLand extends React.Component {
    render() {
        return (
            <div className="block_housesLand">

                <div>
                    <div className="title title_p">
                        <p>БУДИНКИ НА СУШІ</p>
                    </div>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </div>

                <div className="row">
                    <div className="col-md-12 ">
                        <div className="text_in_block bg_housesLand">
                            <div>
                            <span className="light_gold_color">Riviera Zoloche Resort & SPA</span> пропонує у довгострокову
							оренду будинок на узбережжі.
							Комфортабельний будиночок, загальною площею 120м2. Виконано в сучасному
							стилі, повністю мебльований. У будиночку є дві затишні спальні, кабінет
							(гардеробна), два санвузли, простора вітальня і обідня зони, кухня з
							необхідною технікою і кухонним начинням. Для відпочинку на відкритому повітрі
							передбачена простора тераса з видом на Дніпро, затишними меблями і телевізором.
                            </div>
                        </div>          
                    </div>
                </div>

                <Row>
                    <Col lg="4">
                        <div className="photobox_housesLand photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House2} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesLand">Будинок на воді №2</span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 5 700 грн</p>
								    <a href="#/house-rent/house-on-land/house2">
									    <div className="btn btn-outline bg_housesLand">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_housesLand photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House3} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesLand">Будинок на воді №3 </span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 5 700 грн</p>
								    <a href="#/house-rent/house-on-land/house3">
									    <div className="btn btn-outline bg_housesLand">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_housesLand photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House4} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesLand">Будинок на воді №4</span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 5 700 грн</p>
								    <a href="#/house-rent/house-on-land/house4">
									    <div className="btn btn-outline bg_housesLand">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_housesLand photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House5} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesLand">Будинок на воді №5</span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 5 700 грн</p>
								    <a href="#/house-rent/house-on-land/house5">
									    <div className="btn btn-outline bg_housesLand">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_housesLand photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House6} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesLand">Будинок на воді №6 </span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 5 700 грн</p>
								    <a href="#/house-rent/house-on-land/house6">
									    <div className="btn btn-outline bg_housesLand">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_housesLand photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House7} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesLand">Будинок на воді №7</span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 5 700 грн</p>
								    <a href="#/house-rent/house-on-land/house7">
									    <div className="btn btn-outline bg_housesLand">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                        </Col>
                        <Col lg={{ span: 4, offset: 4 }}>                       
                        <div className="photobox_housesLand photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={House8} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_housesLand">Будинок на воді №8</span>

							    <div className="photobox__label">
								    <p> Ціна за ніч від 5 700 грн</p>
								    <a href="#/house-rent/house-on-land/house8">
									    <div className="btn btn-outline bg_housesLand">Детальніше</div>
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

export default HousesLand;
