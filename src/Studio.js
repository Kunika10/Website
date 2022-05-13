import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import studioimg1 from './Assests/images/studio_img (1).png';
import studioimg2 from './Assests/images/studio_img (2).png';
import studioimg4 from './Assests/images/studio_img (4).png';
import CallMadeIcon from '@material-ui/icons/CallMade';
 const Studio = () => {
  return (
    <>
        <div className='studio_section'>
            <Container className='custom_container1 '>
                <div className='studio_sec'>
                <Row>
                <Col  md={12} lg={12} xl={12} xs={12}>
                <h1 className='studio_heading'>
                    <span className='studio_span'>WE ARE </span>
                    <img src={studioimg1} alt="" />
                    <span> <u>BRANDING</u> </span>
                    <span>AGENCY</span><span className='studio_icon'><CallMadeIcon className='studio_arrow'/></span>
                    <span>AND</span><img src={studioimg2} alt="" />
                    <span>DESIGN</span><img src={studioimg4} alt="" />
                    <span>STUDIO </span>
                    <span className='studio_icon1'><CallMadeIcon className='studio_arrow'/></span>
                </h1>
                </Col>
                </Row>
                </div>
            </Container>
        </div>
    </>
  )
}
export default Studio;
