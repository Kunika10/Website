import './App.css';
import './Assests/Home.css';
import './Assests/Responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Scrolltotop from "./Scrolltotop";
import AOS from 'aos'
import "aos/dist/aos.css";


AOS.init({
  offset: 200,
  duration: 1000,
  easing: 'ease-in',
  delay: 200,
  mirror: true
});
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Headernew/> */}
    <Header/>
    <Scrolltotop/>
      <Home/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
