import React from 'react'
import { Container} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@material-ui/icons/Star';
import google from './Assests/images/google.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Testimonial () {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        margin: 30,
        initialSlide: 0,
        nextArrow : <ArrowForwardIosIcon/>,
        prevArrow : <ArrowBackIosIcon/>
    };
  return (
    <>
        <div className='testimonial'>
            <Container className='custom_container'>
                <div className='testimonial_section'>
                    <div className='testimonial_heading'>
                        <h1>Relationships based <br/>on trust.</h1>
                    </div>
                    <div className='review_slider'>
                    <Slider {...settings}>
                    <div>
                    <div className='review_section'>
                        <div className='test_star'>
                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                        </div>
                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                        <span>John Doe</span>
                        <img src={google} alt="" />
                    </div>
                    </div>
                    <div>
                      <div className='review_section'>
                        <div className='test_star'>
                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                        </div>
                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                        <span>John Doe</span>
                        <img src={google} alt="" />
                    </div>
                    </div>
                        <div>
                    <div className='review_section'>
                        <div className='test_star'>
                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                        </div>
                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                        <span>John Doe</span>
                        <img src={google} alt="" />
                    </div>
                    </div>
                    <div>
                    <div className='review_section'>
                        <div className='test_star'>
                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                        </div>
                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                        <span>John Doe</span>
                        <img src={google} alt="" />
                    </div>
                    </div>
                    <div>
                    <div className='review_section'>
                        <div className='test_star'>
                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                        </div>
                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                        <span>John Doe</span>
                        <img src={google} alt="" />
                    </div>
                    </div>
                    <div>
                    <div className='review_section'>
                        <div className='test_star'>
                            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                        </div>
                        <p>"I cannot recommend Vardo agency highly enough. I worked with Albor to launch Webflow at the end of 2021."</p>
                        <span>John Doe</span>
                        <img src={google} alt="" />
                    </div>
                    </div>
          
        </Slider>
        </div>
                </div>
            </Container>
        </div>
    </>
  )
}
export default Testimonial