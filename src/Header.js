import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './Assests/images/logo.png';

 const Header = () => {
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
      });
    const [disabled, setDisabled] = useState(false);


    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
          setState({
            initial: null,
            clicked: true,
            menuName: "Close"
          });
        } else if (state.clicked === true) {
          setState({
            clicked: !state.clicked,
            menuName: "Menu"
          });
        } else if (state.clicked === false) {
          setState({
            clicked: !state.clicked,
            menuName: "Close"
          });
        }
      };
     
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
          setDisabled(false);
        }, 1200);
      };
  return (
    <>
        <div className='header'>
        <Container className='custom_container1'>
            <div className='header_section'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <ul>
                    <li className='header_li'><Link to='/'> Plans and pricing </Link></li>
                    <li className='header_li'><Link to='/'> Blogs </Link></li>
                    <li className='header_li'><Link to='/'> Careers </Link></li>
                    <li className='header_li header_border'><Link to='/'> Book An Appointment </Link></li>
                    <li className='header_li'><Link to='/'> Book An Appointment </Link></li>
                    <li className='header_li'><Link to='/' disabled={disabled} onClick={handleMenu}> MENU </Link></li>
                    <div className="menu">
            </div>
                </ul>
            </div>
        </Container>
        </div>
    </>
  )
}
export default Header;