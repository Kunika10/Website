import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import instalogo from './Assests/images/insta_logo.png';

 function Instafeed() {
     const [insta, setInsta] = useState (false);
  return (
    <>
        <div className='instafeed'>
            <Container className='custom_container1'>
                <div className='instafeed_section'>
                    <Row>
                        <Col md={4} lg={4} xl={4} xs={12}>
                            <div className='instagram_blog'>
                                <div className='insta_sec'>
                                    <img src={instalogo} alt="" />
                                    <span>#belgium_webnet</span>
                                    <div className='insta_link'>
                                    <Link to='/'>Follow</Link>
                                    </div>

                                </div>
                                <div className='instablog_sec'>
                                    <p className='instablog_p1'>#belgium_webnet</p>
                                    <p className='instablog_p2'>Information Technology Company</p>
                                    <p className='instablog_p3'>@belgium.Diamonds Digital marketing solution for jewelers.💎</p>
                                    <p className='instablog_p3'>Web Development, Design, and Digital Marketing</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} lg={8} xl={8} xs={12}>
                            <div className='instafeed_image'>
                            {insta? (<div class="elfsight-app-368122dd-eb07-4a5c-b0a6-014ed3804162"></div>) : (<p>Error: No Feed Found</p>) }
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container> 
        </div>
    </>
  )
}
export default Instafeed;