import { Button,Navbar,Container,Form,Row,Col,Nav,NavDropdown,FormControl,Offcanvas } from 'react-bootstrap';
import abt1 from './Images/about-1.jpg'
import abt2 from './Images/about-2.jpg'
import abt3 from './Images/about-3.jpg'
import abt4 from './Images/about-4.jpg'

function Aboutus(){
    return(
        <div className="About space">
         <Container>
  <Row>
    <Col className='pad photos'>
    <img className='aimg1' src={abt1} />
    <img className='aimg2' src={abt2} />
    <img className='aimg3' src={abt3} />
    <img className='aimg4' src={abt4} />
    </Col>
    <Col className='about'>
    <p className='size'>---About us---</p>
    <h1>Welcome To Restoran</h1>
    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
    <p className='name'>15</p>
    <p>Years Of <b> Experience </b></p>

    <p className='name'>50</p>
    <p>Popular<b> Master Chef's </b></p>
    <Button variant="warning btn2 btnspace">READ MORE</Button>
    </Col>
  </Row>   
         </Container>
        </div>

);
}



export default Aboutus;
