import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CallMadeIcon from '@material-ui/icons/CallMade';
import projectbg1 from './Assests/images/project_bg1.png';
import projectbg2 from './Assests/images/project_bg2.png';


function Projectslider () {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        margin: 20,
        initialSlide: 0,
    };
  return (
    <>
        <div className='projectslider'>
        <Container className='custom_container'>
            <div className='projectslider_section'>
                <Row>
                    <Col md={3} lg={3} xl={3} xs={12}>
                        <div className='projectslider_content'>
                        <h1>Recent Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vivamus pretium maecenas amet, pellentesque sollicitudin.</p>
                        <Link to='/'>Let’s work <CallMadeIcon/>
                        </Link>
                        </div>
                    </Col>
                    <Col md={9} lg={9} xl={9} xs={12}>
                        <div className='projectslider_img'>
                        <Slider {...settings}>
                                <div className='project_slider'>
                                    <img src={projectbg1} alt="" />
                                    <div className='project_content'>
                                        <Row>
                                            <Col md={4} lg={4} xl={4} xs={12}>
                                                <h3>Lake Hillier</h3>
                                            </Col>
                                            <Col md={8} lg={8} xl={8} xs={12}>
                                                <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content...</p>
                                            </Col>
                                        </Row>   
                                    </div>
                                </div>
                                <div className='project_slider'>
                                    <img src={projectbg2} alt="" />
                                    <div className='project_content'>
                                    <Row>
                                            <Col md={4} lg={4} xl={4} xs={12}>
                                                <h3>Trango Towers</h3>
                                            </Col>
                                            <Col md={8} lg={8} xl={8} xs={12}>
                                                <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content...</p>
                                            </Col>
                                        </Row>   
                                    </div>
                                </div>
                                <div className='project_slider'>
                                    <img src={projectbg1} alt="" />
                                    <div className='project_content'>
                                    <Row>
                                            <Col md={4} lg={4} xl={4} xs={12}>
                                                <h3>Lake Hillier</h3>
                                            </Col>
                                            <Col md={8} lg={8} xl={8} xs={12}>
                                                <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content...</p>
                                            </Col>
                                        </Row>   
                                    </div>
                                </div>
                                <div className='project_slider'>
                                    <img src={projectbg2} alt="" />
                                    <div className='project_content'>
                                    <Row>
                                            <Col md={4} lg={4} xl={4} xs={12}>
                                                <h3>Trango Towers</h3>
                                            </Col>
                                            <Col md={8} lg={8} xl={8} xs={12}>
                                                <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content...</p>
                                            </Col>
                                        </Row> 
                                    </div>
                                </div>
                                <div className='project_slider'>
                                    <img src={projectbg1} alt="" />
                                    <div className='project_content'>
                                    <Row>
                                            <Col md={4} lg={4} xl={4} xs={12}>
                                                <h3>Lake Hillier</h3>
                                            </Col>
                                            <Col md={8} lg={8} xl={8} xs={12}>
                                                <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content...</p>
                                            </Col>
                                        </Row>   
                                    </div>
                                </div>
                                <div className='project_slider'>
                                    <img src={projectbg2} alt="" />
                                    <div className='project_content'>
                                    <Row>
                                            <Col md={4} lg={4} xl={4} xs={12}>
                                                <h3>Trango Towers</h3>
                                            </Col>
                                            <Col md={8} lg={8} xl={8} xs={12}>
                                                <p>Lake Hillier is an effective, unique, custom designed theme with a clear, informative hierarchy that showcases relevant content...</p>
                                            </Col>
                                        </Row> 
                                    </div>
                                </div>
                                </Slider>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        </div>
    </>
  )
}

export default Projectslider;