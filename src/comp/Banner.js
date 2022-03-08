import { Button,Navbar,Container,Form,Row,Col,Nav,NavDropdown,FormControl,Offcanvas } from 'react-bootstrap';
import bimg from  './Images/bg-hero.jpg'
import spin from  './Images/hero.png'
import React from 'react';
function Banner(){
    return(
        <div className="bgimg space fcolor">      
       <Container>
       <Row>
    <Col xs={6}>
    <div  className='quote'>
        Enjoy Our Delicious Meal
        </div> 
     <p className='para'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>   
     <Button variant="warning btn2 book book1">BOOK A TABLE</Button>
    </Col>
    
    <Col xs={6} className='rotate'>
        <img className='plate img' src={spin} /> 
        {/* type img for rotation */}
    </Col>
     </Row>
     </Container> 
    
        </div>

    );
}       

export default Banner;