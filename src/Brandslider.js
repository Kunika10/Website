import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from './Assests/images/brand1.png';
import brand2 from './Assests/images/brand2.png';
import brand3 from './Assests/images/brand3.png';
import brand4 from './Assests/images/brand4.png';
import brand5 from './Assests/images/brand5.png';
import brand6 from './Assests/images/brand6.png';
import brand7 from './Assests/images/brand7.png';
import brand8 from './Assests/images/brand8.png';
import brand9 from './Assests/images/brand9.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



function Brandslider () {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 20,
    initialSlide: 0,
    nextArrow : <ArrowForwardIosIcon/>,
    prevArrow : <ArrowBackIosIcon/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='brandslider'>
        <Container className="custom_container">
          <div className='brandslider_section'>
            <Row>
              <Col md={5} lg={5} xl={5} xs={12}>
                <div className="brand_content">
                  <h1>We worked with the world’s biggest brands</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
              </Col>
              <Col md={7} lg={7} xl={7} xs={12}>
                <div className="brand_images">
                  <Slider {...settings}>
                    <div>
                      <div className="brand1_sec">
                        <Row>
                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand1} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand2} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand3} alt="" />
                            </div>
                          </Col>

                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand4} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand5} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand6} alt="" />
                            </div>
                          </Col>

                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand7} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand8} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand9} alt="" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div>
                    <div className="brand1_sec">
                        <Row>
                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand1} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand2} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand3} alt="" />
                            </div>
                          </Col>

                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand4} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand5} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand6} alt="" />
                            </div>
                          </Col>

                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand7} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand8} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand9} alt="" />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div>
                    <div className="brand1_sec">
                        <Row>
                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand1} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand2} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand3} alt="" />
                            </div>
                          </Col>

                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand4} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand5} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand6} alt="" />
                            </div>
                          </Col>

                          <Col md={4} lg={4} xl={4} xs={12}>
                            <div className="brand_img">
                              <img src={brand7} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand8} alt="" />
                            </div>

                            <div className="brand_img">
                              <img src={brand9} alt="" />
                            </div>
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
    );
  }
export default Brandslider; 

