import React from 'react'
import business from './Assests/images/business.gif';
import product from './Assests/images/product.gif';
import web from './Assests/images/web.gif';
import marketing from './Assests/images/marketing.gif';
import digital from './Assests/images/digital.gif';
import keyword from './Assests/images/keyword.gif';
import { Col, Container, Row } from 'react-bootstrap';

 const Services = () => {
  return (
    <>
        <div className='branding'>
        <Container className='custom_container'>
        <div className='branding_section'>
        <div className='agency_sec'>
        <div className='services'></div>
        <span>OUR SERVCIES</span>
        </div>
        <h2>New Branding Agency</h2>
        <div className='agency_section'>
        <Row>
            <Col md={4} lg={4} xl={4} xs={12}>
                <div className='branding_sec' data-aos="fade-up">
                    <div className='branding_img'>
                        <img src={business} alt="" />
                    </div>
                    <div className='branding_content'>
                        <h3>Business Stratagy</h3>
                        <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={4} xl={4} xs={12}>
            <div className='branding_sec' data-aos="fade-up">
                    <div className='branding_img'>
                        <img src={product} alt="" />
                    </div>
                    <div className='branding_content'>
                        <h3>UX & Product Design</h3>
                        <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={4} xl={4} xs={12}>
            <div className='branding_sec' data-aos="fade-up">
                    <div className='branding_img'>
                        <img src={web} alt="" />
                    </div>
                    <div className='branding_content'>
                        <h3>Web Development</h3>
                        <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={4} xl={4} xs={12}>
            <div className='branding_sec' data-aos="fade-up">
                    <div className='branding_img'>
                        <img src={marketing} alt="" />
                    </div>
                    <div className='branding_content'>
                        <h3>Marketing Stratagy</h3>
                        <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={4} xl={4} xs={12}>
            <div className='branding_sec' data-aos="fade-up">
                    <div className='branding_img'>
                        <img src={digital} alt="" />
                    </div>
                    <div className='branding_content'>
                        <h3>Digital Marketing</h3>
                        <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={4} xl={4} xs={12}>
            <div className='branding_sec' data-aos="fade-up">
                    <div className='branding_img'>
                        <img src={keyword} alt="" />
                    </div>
                    <div className='branding_content'>
                        <h3>Keyword Research</h3>
                        <p>Web design encompasses many different skills and disciplines in the production of all web.</p>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
        </div>
        </Container>
        </div>
    </>
  )
}
export default Services;
