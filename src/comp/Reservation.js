import { Button,Navbar,Container,Form,Row,Col,Nav,NavDropdown,FormControl,Offcanvas } from 'react-bootstrap';
import vdo from './Images/video.jpg'

function Reservation(){
    return(
        <div className="space"> 
        <Container fluid>
  <Row>
    <Col sm={6}>
   <img className='two' src={vdo} />
    </Col>
    <Col sm={6} className='bg space'>
    <p className='size App1'>Reservation -----</p>
    <p className='size1 App1'>Book A Table Online</p>
    <Form>
    <Form.Group className="mb-3 wid" controlId="exampleForm.ControlInput1">
    <Form.Control type="name" placeholder="Your Name" />
  </Form.Group>
  <Form.Group className="mb-3 wid" controlId="exampleForm.ControlInput1">
    <Form.Control type="date" placeholder="Date And Time" />
  </Form.Group>
  <Form.Group className="mb-3 wid" controlId="exampleForm.ControlInput1">
    <Form.Control type="email" placeholder="Your Email" />
  </Form.Group>
  <Form.Group className="mb-3 wid" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" placeholder='Special Request' rows={3} />
  </Form.Group>
  <Button variant="warning btn1 btn4">BOOK NOW</Button>

</Form>
    </Col>
  </Row> 
  </Container>
         </div>   

);
}    

export default Reservation;