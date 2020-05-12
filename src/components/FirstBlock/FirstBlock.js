import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Video from "../../img/video.mp4";

import './FirstBlock.css';

class FirstBlock extends React.Component {
    render() {
        return (
            <div className="first_block">
                <div className="home-video-wrapper">
                    <video id="myvideo" preload="auto" autoPlay="autoPlay" loop="" muted="muted">
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>

                <div className="telephone_block shadow_tel">                   
                    <a href="tel:+380689949090">+38 068 994 90 90</a>                    
                </div>

                <div className="header_block">
                    <h1> Riviera Zoloche Resort & SPA</h1>
                    <Row>
                        <Col sm={{order: 12 }}>
                            <div className="text_in_header bg_headerText">
                                <p className="">
                                Територія безтурботного відпочинку в котеджному містечку Zoloche
						        </p>
                            </div>                        
                        </Col>
                    </Row>                   
                </div>
            </div>
        );
    }
}

export default FirstBlock;
