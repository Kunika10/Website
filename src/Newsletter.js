import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import news1 from './Assests/images/news1.png'
import news2 from './Assests/images/news2.png'
import subscribe from './Assests/images/subscribe.png'

 function Newsletter() {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setEmail(value)
  }

  return (
    <>
        <div className='newsletter'>
        <Container className='custom_container1'>
            <div className='newsletter_section'>
              <Row>
              <Col md={2} xl={2} lg={2}>
                <div className='news_image'>
                  <img src={news2} alt="" />
                </div>
              </Col>
              
                <Col md={8} xl={8} lg={8}> 
                  <div className='newsletter_sec'>
                  <div className='newsletter_content'>
                    <h1>SIGN UP TO BE A Begium WebNet INSIDER</h1>
                    <p>Become a preferred subscriber and get a special offer on your purchase.</p>
                    <div className='newsletter_form'>
                    <Form onSubmit={handleSubmit}>
                      <TextField className='email_sec' aria-label="Your email address" name="email_address" placeholder="email@newsletter.com" required type="email" onChange={handleEmailChange} value={email}/>
                      <Button className='subscribe_btn'><img src={subscribe} alt="" /> </Button>
                    </Form>
                    </div>
                    </div>
                  </div>
                </Col>
                <Col md={2} xl={2} lg={2}>
                <div className='news_image'>
                  <img src={news1} alt="" />
                </div>
                </Col>
              </Row>
            </div>
        </Container>
        </div>
    </>
  )
}
export default Newsletter;