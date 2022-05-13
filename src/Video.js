import React, { useState } from 'react'
import {Col, Container, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import playicon from './Assests/images/play_icon.png';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

 const Video = () => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
        <div className='video_section'>
            <Container>
            <div className='video_content'>
                <Row>
                    <Col md={6} lg={8} xl={8} xs={12}>
                        <div className='video_img_content'>
                            <h1>Global Leader in Modern Business Innovation</h1>
                            <p>With unique business passionate people behind.</p>
                            <div className='video_content_a'>
                            <Link to='/'>Let’s Talk</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} xl={4} xs={12}>
                        <div className='video_img' onClick={handleShow}>
                            <img src={playicon} alt="" />
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body> 
                            <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            />
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </div>
           
            </Container>

            
        </div>
    </>
  )
}
export default Video;
