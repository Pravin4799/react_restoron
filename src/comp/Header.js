import { Button,Navbar,Container,Form,Row,Col,Nav,NavDropdown,FormControl,Offcanvas,Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Routes,Route ,Link} from "react-router-dom";


import { Home } from './Home';
import { Menu } from './Menu';


function Header(){
    return(
      <Router>
        <div className="menubar stick">
       <Container fluid>
       <Row className='bg'>
    <Col xs={3}> 
    {/* <span> <img className='name App1' src= {logo} alt='logo' width={30} height={30} /></span> */}
      <div  className='name App1 Restoron'>Restoran</div>
          </Col>
    <Col xs={2}></Col>
    <Col xs={7}>
    <Navbar expand='lg' bg="bg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="">
      <Nav
        className="me-auto my-2 my-lg-0 space1 menubar"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className='fc' as={Link} to={"/"} >HOME</Nav.Link>

        <Nav.Link className='fc'  > ABOUT</Nav.Link>
        <Nav.Link className='fc'  > SERVICE</Nav.Link>
        
        <Nav.Link className='fc' as={Link} to={"/Menu"}>MENU</Nav.Link>
        <Nav.Link className='fc'  > PAGES</Nav.Link>
        <Nav.Link className='fc'  > CONTACT</Nav.Link>
      </Nav>
        <Button variant="warning btn1 btn5 book">BOOK A TABLE</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </Col>
  </Row>
  </Container>
   
  
    </div>

    <div>
     <Routes>
      <Route exact path="/" element={< Home/>} />
      <Route exact path="/Menu" element={<Menu />} />
    </Routes>
    </div>
    
    </Router>
);
}



export default Header;
