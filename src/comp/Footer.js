import { Button,Navbar,Container,Form,Row,Col,Nav,NavDropdown,FormControl,Offcanvas } from 'react-bootstrap';
import arrow from './Images/icons/arrow.svg'
import location from './Images/icons/location2.svg'
import call from './Images/icons/landline.svg'




function Footer(){
    return(
        <div className="space bg footer1"> 
 <Container>
        <Row>
        <Col sm={3}>
        <p className='size'>Company---</p>
        <img src={arrow} height={25} width={25} /><span className='white'> About us</span> <br/>
        <img src={arrow} height={25} width={25} /><span className='white'> Contact us</span><br/>
        <img src={arrow} height={25} width={25} /><span className='white'> Reservation</span><br/>
        <img src={arrow} height={25} width={25} /><span className='white'> Privacy policy</span><br/>
        <img src={arrow} height={25} width={25} /><span className='white'> Terms & Conditions</span><br/>

             </Col>
        <Col sm={3}> 
        <p className='size'>Contact---</p>
        <img src={location} height={25} width={25} /><span className='white'> 123 Street, New York, USA</span><br/>
        <img src={call} height={25} width={25} /><span className='white'> 0422-7633389</span><br/>

           </Col>

        <Col sm={3}>
        <p className='size'>Opening---</p>
        <ul>
        <p className='white left'><u>Monday - Saturday</u></p>
        <p className='white left'>9 AM - 9 PM</p>
        <p className='white left'><u>Sunday</u></p>
        <p className='white left'>10 AM - 8 PM</p>
        </ul>
             </Col>

        <Col sm={3}>
        <p className='size'>Newsletter---</p>
        <p className='white'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <Form.Group as={Col} controlId="formGridCity">
      <Form.Control placeholder='Your Email'/> 
      <Button variant="warning lastbtn">SIGN UP</Button>{' '}
    </Form.Group>

             </Col>



        </Row>
        </Container>

        <Container>
  <Row>
  <div className="space footerborder"></div>
  </Row><br />
  <Row>  
  <p style={{color:"white"}}> &copy; Restoron, All Right Reserved. Designed By Pravin </p>
  </Row>
</Container>
</div>   

);
}    

export default Footer;