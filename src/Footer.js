import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import footerlogo from './Assests/images/footer_logo.png'
import footerimg1 from './Assests/images/footerimg1.png'
import footerimg2 from './Assests/images/footerimg2.png'
import footerimg3 from './Assests/images/footerimg3.png'
import footerimg4 from './Assests/images/footerimg4.png'
import footerside1 from './Assests/images/footerside1.png'
import footerside2 from './Assests/images/footerside2.png'
import { Link } from 'react-router-dom';


 function Footer() {
  return (
    <>
        <div className='footer'>
            <Container className='custom_container1'>
                <div className='footer_section'>
                    <Row>
                        <Col md={3} lg={3} xl={3} xs={12}>
                            <div className='footer_sec1'>
                                <h3>Home</h3>
                                <ul>
                                    <li><Link to='/'> Work </Link></li> 
                                    <li>Services</li>
                                    <li>Studio</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} lg={3} xl={3} xs={12}>
                        <div className='footer_sec'>
                            <h3>EXPERTS IN</h3>
                                <ul>
                                    <li>Hospitality </li> 
                                    <li>Property and Architecture</li>
                                    <li>Film and Television</li>
                                    <li>Business to Business</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} lg={3} xl={3} xs={12}>
                        <div className='footer_sec'>
                            <h3>OFFICES</h3>
                                <ul>
                                    <li>20 W 47th St, Suite 601</li> 
                                    <li>New York, NY 10036</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} lg={3} xl={3} xs={12}>
                        <div className='footersocialicon_section'>
                            <div className='footer_sec2'>
                                <h3>FOLLOW</h3>
                                <ul>
                                    <li><FaTwitter/></li>
                                    <li><FaFacebookF/></li>
                                    <li><FaPinterestP/></li>
                                    <li><FaInstagram/></li>
                                    <li><AiOutlineYoutube/></li>
                                </ul>
                            </div>
                            <div className='footeremail_sec'>
                            <h2> info@belgiumwebnet.com</h2>
                            <div className='footer_logoimg'>
                                <img src={footerlogo} alt="" />
                            </div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <div className='footer_img'>
                        <ul>
                            <li><img src={footerimg1} alt="" /></li>
                            <li><img src={footerimg2} alt="" /></li>
                            <li><img src={footerimg3} alt="" /></li>
                            <li><img src={footerimg4} alt="" /></li>
                        </ul>
                        <p>Copyright © 2022 Belgium WebNet. All Rights Reserved.</p>
                    </div>
                </div>
            </Container>
                <div>
                    <img src={footerside1} alt=""  className='img-fluid footer_img1'/>
                    <img src={footerside2} alt="" className='img-fluid footer_img2'/>
                <div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
export default Footer; 