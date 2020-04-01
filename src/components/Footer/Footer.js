import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IoIosCall } from "react-icons/io";
import { IoMdGlobe } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";



import './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<Row className="footer_block">
					<Col md="3">
						<div className="copy_txt">

							<ul>
								<li>
									<IoIosCall />
									<a href="tel:+380689949090">+38 068 994 90 90</a>
								</li>
							</ul>

						</div>
					</Col>
					<Col md="3">
						<div className="copy_txt">

							<ul>
								<li><FaMapMarkedAlt /> Бориспільський р-н,</li>
								<li>с. Вишеньки, вул. Європейська, 1</li>
							</ul>

						</div>
					</Col>
					<Col md="3">
						<div className="copy_txt">
							<ul>
								<li><IoIosMail /> fitness@zoloche.ua</li>
								<li><IoMdGlobe /> rs.zoloche.ua</li>
							</ul>
						</div>
					</Col>
					<Col md="3">
						<div className="footer_item">
							<a href="https://www.facebook.com/zoloche/" target="_blank" rel="noopener noreferrer">
								<button className="soc_btn_white">
									<FaFacebookSquare />
								</button>
							</a>
							<a href="https://www.instagram.com/rivierazoloche/" target="_blank" rel="noopener noreferrer">
								<button className="soc_btn_white">
									<FaInstagram />
								</button>
							</a>
							<a href="https://www.youtube.com/channel/UCJWUIpqIcDD7G_0SixXF60Q?view_as=subscriber"
								target="_blank" rel="noopener noreferrer">
								<button className="soc_btn_white">
									<FaYoutube />
								</button>
							</a>
							<a href="https://www.booking.com/hotel/ua/zafferano-vishenki.ru.html" target="_blank" rel="noopener noreferrer">
								<button className="soc_btn_white">
									<FaBootstrap />
								</button>
							</a>
							<a href="https://www.tripadvisor.it/Hotel_Review-g12831670-d14189983-Reviews-Riviera_Zoloche_Resort_Spa-Vyshenky_Kiev_Oblast.html"
								target="_blank" rel="noopener noreferrer">
								<button className="soc_btn_white">
									<FaTripadvisor />
								</button>
							</a>
						</div>
					</Col>
				</Row>
				<div className="copyright_block">
					<div>
						<div className="copy_txt">
							Copyright 2017 © Zoloche | All Rights Reserved
						    </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
