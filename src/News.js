import React from 'react'
import { MDBMedia } from 'mdbreact';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import previewimg from './Assests/images/preview_img.png';
import media1 from './Assests/images/media1.png';
import media2 from './Assests/images/media2.png';
import media3 from './Assests/images/media3.png';
import { Divider } from '@material-ui/core';

 function News() {
  return (
    <>
        <div className='news'>
            <Container>
                <div className='news_section'>
                  <div className='preview_section'>
                    <Row>
                      <Col md={8} lg={8} xl={8} xs={12}>
                        <div className='preview_content'>
                          <span>FEATURED</span>
                          <h1>The New Microsoft Edge is Out of Preview</h1>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                          <Link to='/'>Continue Reading<ArrowForwardIcon/></Link>
                        </div>
                      </Col>
                      <Col md={4} lg={4} xl={4} xs={12}>
                        <div className='preview_img'>
                          <img src={previewimg} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className='media_blog'>
                    <div className='media_section'>
                      <MDBMedia className='media_sec'>
                        <MDBMedia left className="mr-3" href="#">
                          <MDBMedia object src={media1} alt="" />
                        </MDBMedia>
                        <MDBMedia body>
                          <MDBMedia heading>
                          NEWS
                        </MDBMedia>
                        <span>
                        Hypnotize Yourself into The Ghost of <br/> Christmas Future
                        </span>
                        </MDBMedia>
                        <MDBMedia right className="mr-3 media_link" href="#"> Continue Reading <ArrowForwardIcon/>
                        </MDBMedia>
                      </MDBMedia> 
                    </div>
                    <Divider />
                    <div className='media_section'>
                      <MDBMedia className='media_sec'>
                        <MDBMedia left className="mr-3" href="#">
                          <MDBMedia object src={media2} alt="" />
                        </MDBMedia>
                        <MDBMedia body>
                          <MDBMedia heading>
                          NEWS
                        </MDBMedia>
                        <span>
                        Hypnotize Yourself into The Ghost of <br/> Christmas Future
                        </span>
                        </MDBMedia>
                        <MDBMedia right className="mr-3 media_link" href="#"> Continue Reading <ArrowForwardIcon/>
                        </MDBMedia>
                      </MDBMedia> 
                    </div>
                    <Divider />
                    <div className='media_section'>
                      <MDBMedia className='media_sec'>
                        <MDBMedia left className="mr-3" href="#">
                          <MDBMedia object src={media3} alt="" />
                        </MDBMedia>
                        <MDBMedia body>
                          <MDBMedia heading>
                          NEWS
                        </MDBMedia>
                        <span>
                        Hypnotize Yourself into The Ghost of <br/> Christmas Future
                        </span>
                        </MDBMedia>
                        <MDBMedia right className="mr-3 media_link" href="#"> Continue Reading <ArrowForwardIcon/>
                        </MDBMedia>
                      </MDBMedia> 
                    </div>
                  </div>
                  <div className='mediablog_link'>
                  <Link to='/'>See More</Link>
                  </div>
                </div>
            </Container>
        </div>
    </>
  )
}
export default News;