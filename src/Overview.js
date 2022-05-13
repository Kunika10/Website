import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandicon1 from './Assests/images/brand_01.png';
import brandicon2 from './Assests/images/brand_02.png';
import brandicon3 from './Assests/images/brand_03.png';
import icon1 from './Assests/images/image 104.png';
import icon2 from './Assests/images/image 105.png';
import icon3 from './Assests/images/image 106.png';
import icon4 from './Assests/images/image 107.png';
 const Overview = () => {
  return (
    <>
        <div className='overview'>
            <Container className='custom_container'>
                <div className='overview_section'>
                    <Row>
                        <Col md={6} lg={6} xl={6} xs={12}>
                        <div className='overview_leftside'>
                            <span>Overview</span>
                            <h1>About Our Company Insight</h1>
                            <p>Triplet I award-winning interdisciplinary architectural studio cultural, residential and commercial projects built worldwide. We pride ourselves on being builders creating architectural.</p>
                            <Link to='/'>Let’s Chat</Link>
                            <div className='brand_list'>
                                <ul>
                                    <li>
                                        <img src={brandicon1} alt="" />
                                    </li>
                                    <li>
                                        <img src={brandicon2} alt="" />
                                    </li>
                                    <li>
                                        <img src={brandicon3} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xs={12}>
                            <div className='overview_rightside'>
                            <Row>
                            <Col md={6} lg={6} xl={6} xs={12} >
                                <div className='brand_sec' data-aos="zoom-in-up">
                                    <img src={icon1} alt="" />
                                    <h2>63</h2>
                                    <p className='brand_sec_para'>Years of experience</p>
                                    <p className='brand_sec_para1'>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                </div>
                                <div className='brand_sec' data-aos="zoom-in-up">
                                    <img src={icon4} alt="" />
                                    <h2>63</h2>
                                    <p className='brand_sec_para'>Years of experience</p>
                                    <p className='brand_sec_para1'>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                </div>
                                </Col>
                                <Col md={6} lg={6} xl={6} xs={12} className="right_side">
                                <div className='brand_sec' data-aos="zoom-in-up">
                                    <img src={icon2} alt="" />
                                    <h2>63</h2>
                                    <p className='brand_sec_para'>Years of experience</p>
                                    <p className='brand_sec_para1'>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                </div>
                                <div className='brand_sec' data-aos="zoom-in-up">
                                    <img src={icon3} alt="" />
                                    <h2>63</h2>
                                    <p className='brand_sec_para'>Years of experience</p>
                                    <p className='brand_sec_para1'>Duis aute irure dolor in velit reprehenderit in voluptate esse cillum dolore neris.</p>
                                </div>
                                </Col>
                                </Row>
                            </div> 

                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    </>
  )
}
export default Overview;
