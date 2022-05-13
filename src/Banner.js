import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerimg from './Assests/images/banner_img.png'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
const Banner = () => {
    const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)


  return (
    <>
        <div className='banner_section' >
            <Container className='custom_container1'>
            <div className='banner_sec' >
                <Row>
                    <Col md={6} lg={6} xl={6} xs={12}>
                    <div className='banner_leftside'>
                    <h1>Experience the <b>Fastest Websites</b> available In the market</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link to='/'>CLICK HERE</Link>
                    </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xs={12}>
                        <div className='banner_rightside'>
                            <img src={bannerimg} alt="" />
                        </div>
                    </Col>
                    <div className="field">
                    <div className="mouse"  onClick={executeScroll}>
                    </div>
                </div>
                <div className='scroll_sec'><p>Scroll to explore</p></div>
                </Row>
                
                
            </div>
            </Container>
            <div ref={myRef}></div>
        </div>
    </>
  )
}
export default Banner;
