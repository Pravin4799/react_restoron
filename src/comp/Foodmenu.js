import { Button,Navbar,Container,Form,Row,Col,Nav,NavDropdown,FormControl,Offcanvas } from 'react-bootstrap';
// import breakfast from './Images/icons/Coffee.svg'
// import lunch from './Images/icons/Burger.svg'
// import dinner from './Images/icons/FORK.svg'
import burger from './Images/menu-1.jpg'
import noodles from './Images/menu-2.jpg'
import pizza from './Images/menu-3.jpg'
import fries from './Images/menu-4.jpg'
import sandwich from './Images/menu-5.jpg'
import meal from './Images/menu-6.jpg'
import coke from './Images/menu-7.jpg'
import wings from './Images/menu-8.jpg'

function Foodmenu(){
    return(
<div className='Food space'>
<Container>
  <Row>
    <Col>
    <p className='size App1'>---Food Menu---</p>
    <h1 className='App1'>Most Popular Items</h1>
    </Col>
  </Row>
  <Row>
    <Col className='list cprice'>
   <img src={burger} height={100} width={100}/>
   <span className='price'> Chicken Burger <span className='fc2'>$115</span></span>
   <p className='describe'>Quick Seller, Delicious Treat, Crispy, Tasty</p>
    </Col>
    <Col  className='list  cprice'>
    <img src={noodles} height={100} width={100}/>
    <span className='price'> Chicken Burger <span className='fc2'>$115</span></span>
    <p className='describe'>Quick Seller, Delicious Treat, Crispy, Tasty</p>
    </Col>
  </Row>
  <Row>
    <Col className='list cprice'>
   <img src={pizza} height={100} width={100}/>
   <span className='price'> Chicken Burger <span className='fc2'>$115</span></span>
   <p className='describe'>Quick Seller, Delicious Treat, Crispy, Tasty</p>
    </Col>
    <Col className='list cprice'>
    <img src={fries} height={100} width={100}/>
    <span className='price'> Chicken Burger <span className='fc2'>$115</span></span>
    <p className='describe'>Quick Seller, Delicious Treat, Crispy, Tasty</p>
    </Col>
  </Row>
  <Row>
    <Col className='list cprice'>
   <img src={sandwich} height={100} width={100}/>
   <span className='price'> Chicken Burger <span className='fc2'>$115</span></span>
   <p className='describe'>Quick Seller, Delicious Treat, Crispy, Tasty</p>
    </Col>
    <Col className='list cprice'>
    <img src={meal} height={100} width={100}/>
    <span className='price'> Chicken Burger <span className='fc2'>$115</span></span>
    <p className='describe'>Quick Seller, Delicious Treat, Crispy, Tasty</p>
    </Col>
  </Row>
  <Row>
    <Col className='list cprice'>
   <img src={coke} height={100} width={100}/>
   <span className='price'> Chicken Burger <span className='fc2'>$115</span></span>
   <p className='describe'>Quick Seller, Delicious Treat, Crispy, Tasty</p>
    </Col>
    <Col className='list cprice'>
    <img src={wings} height={100} width={100}/>
    <span className='price'> Chicken Burger <span className='fc2'>$115</span></span>
    <p className='describe'>Quick Seller, Delicious Treat, Crispy, Tasty</p>
    </Col>
  </Row>
</Container>
  
</div>


);
}



export default Foodmenu;
