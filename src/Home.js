import React from 'react'
import Services from './Services';
import Overview from './Overview';
import Banner from './Banner';
import Studio from './Studio';
import Video from './Video';
import Brandslider from './Brandslider';
import Projectslider from './Projectslider';
import Testimonial from './Testimonial';
import News from './News';
import Instafeed from './Instafeed';
import Newsletter from './Newsletter';

 const Home = () => {
  return (
    <>

    <Banner/>
    <Overview/>
    <Services/>
    <Studio/>
    <Brandslider/>
    <Video/>
    <Projectslider/>
    <Testimonial/>
    <News/>
    <Instafeed/>
    <Newsletter/>
    
    </>
  )
}
export default Home;
