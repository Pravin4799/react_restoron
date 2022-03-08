import { Button,Navbar,Container,Form,Row,Col,Nav,NavDropdown,FormControl,Offcanvas } from 'react-bootstrap';
import ifork from './Images/icons/FORK.svg'
import iuser from './Images/icons/user.svg'
import icart from './Images/icons/cart.svg'
import iheadset from './Images/icons/headset.svg'

function Service(){
    return(
        <div className="space">  
        <Container>
        <Row>
    <Col  xs={2} className='round-icon box'>
    <i class="fa-solid fa-user" style={{fontSize: "35px"}}></i>
        <h4>Master Chef's</h4>
        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
         </Col>

         <Col  xs={1}> </Col>

    <Col xs={2} className='round-icon box'> 
    <i class="fa-solid fa-utensils" style={{fontSize: "40px"}}></i>
         <h4>Quality Food</h4>
         <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>

        </Col>
        <Col  xs={1}> </Col>


     <Col xs={2} className='round-icon box'>
     <i class="fa-solid fa-cart-shopping" style={{fontSize: "35px"}}></i>
         <h4>Online Order</h4>         
         <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>

         </Col>
         <Col  xs={1}> </Col>


     <Col xs={2} className='round-icon box'> 
     <i class="fa-solid fa-headset" style={{fontSize: "35px"}}></i>
         <h4>24x7 Service</h4>
         <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>

         </Col>

  </Row>
        </Container>
        </div>   

);
}    

export default Service;