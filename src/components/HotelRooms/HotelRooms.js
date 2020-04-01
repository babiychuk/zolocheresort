import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './HotelRooms.css';

import RoomStandart from "../../img/hotelRooms/room-standart.jpg";
import Semilux from "../../img/hotelRooms/room-semilux.jpg";
import Lux from "../../img/hotelRooms/room-lux.jpg";



class HotelRooms extends React.Component {
    render() {
        return (
            <div className="block_hotelRooms">

                <div>
                    <div className="title title_p">
                        <p>ГОТЕЛЬНІ НОМЕРИ</p>
                    </div>
                    <hr align="center" width="40%" size="1" color="#fff" />
                </div>

                <div className="row">
                    <div className="col-md-12 ">
                        <div className="text_in_block bg_hotelRooms">
                            <p className="">
                                <span className="light_gold_color">Riviera Zoloche Resort & SPA</span>. пропонує готельні номери
                                з шикарним видом на Дніпро. У кожному номері є кондиціонер, швидкісний інтернет, супутникове
                                телебачення.
                                Для послуг гостей таця гостинності зі всім необхідним для приготування чаю та кави. У ванній
                                кімнаті
                                є набір міні парфумерії, халати, капці і фен. Тераси обладнані зручними вуличними меблями.
                                У міні барі напої і закуски за додаткову плату. За потребую надається праска, прасувальна
                                дошка
                                та додаткове спальне місце. У вартість проживання, в літній час, входить відвідування зони
                                відпочинку
                                з басейнами, а в зимовий час, відвідування тренажерного залу.
							<b>Сніданки у вартість номера не включені!</b>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 title">
                        <p>Номери та ціни</p>
                    </div>
                </div>

                <Row>
                    <Col lg="4">
                        <div className="photobox_hotelRooms photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={RoomStandart} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_hotelRooms ">Стандарт</span>

							    <div className="photobox__label">
								    <p>Ціна за ніч від 2 600 грн</p>
								    <a href="#/hotel/standart">
									    <div className="btn btn-outline bg_hotelRooms">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_hotelRooms photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={Semilux} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_hotelRooms ">Напівлюкс</span>

							    <div className="photobox__label">
								    <p>Ціна за ніч від 3 300 грн</p>
								    <a href="#/hotel/semilux">
									    <div className="btn btn-outline bg_hotelRooms">Детальніше</div>
								    </a>
							    </div>
						    </div>
					    </div>
                    </Col>
                    <Col lg="4">
                        <div className="photobox_hotelRooms photobox_type9">
						    <div className="photobox__previewbox">
							    <img src={Lux} className="photobox__preview" alt="Preview" />
							    <span className="photobox__Staticklabel bg_hotelRooms ">Люкс</span>

							    <div className="photobox__label">
								    <p>Ціна за ніч від 3 900 грн</p>
								    <a href="#/hotel/lux">
									    <div className="btn btn-outline bg_hotelRooms">Детальніше</div>
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

export default HotelRooms;
