import { Button,Navbar,Container,Form,Row,Col,Nav,NavDropdown,FormControl,Offcanvas,Card } from 'react-bootstrap';
import vdo from './Images/video.jpg'
import tm1 from './Images/team-1.jpg'
import tm2 from './Images/team-2.jpg'
import tm3 from './Images/team-3.jpg'
import tm4 from './Images/team-4.jpg'
import fb from './Images/icons/facebook.svg'
import insta from './Images/icons/instagram.svg'
import lin from './Images/icons/linkedin.svg'





function Team(){
    return(
        <div className="space"> 
        <Container>

        <Row>
        <p className='size App1'>----Team Members -----</p>
        <h1 className='App1'>Our Master Chef's</h1>
        <p> </p>
        </Row>

   <Row>
    <Col  className='team card1'>
          <Card className='card11' style={{ width: '12rem' }}> 
          <Card.Img variant="top" src={tm1} className='radius'/>
          <Card.Body>
            <Card.Title className='App1'>Michel</Card.Title>
            <p className='App1'>Chief Cook</p>
            <span> <img className='fbin' src={fb} height="30px" width="30px" /></span> 
            <span> <img src={insta} height="30px" width="30px" /></span> 
            <span> <img src={lin} height="30px" width="30px" /></span> 

          </Card.Body>
        </Card>
    </Col>

    <Col  className='team card1'>
    <Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src={tm2} className='radius' />
  <Card.Body>
    <Card.Title className='App1'>Alexander</Card.Title>
    <p className='App1'>Chief Cook</p>
    <span> <img className='fbin' src={fb} height="30px" width="30px" /></span> 
     <span> <img src={insta} height="30px" width="30px" /></span>
     <span> <img src={lin} height="30px" width="30px" /></span> 
  </Card.Body>
</Card>

    </Col>
    <Col  className='card1 card2'>
    <Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src={tm3} className='radius' />
  <Card.Body>
    <Card.Title className='App1'>Christian</Card.Title>
    <p className='App1'>Chief Cook</p>
    <span> <img className='fbin' src={fb} height="30px" width="30px" /></span> 
     <span> <img src={insta} height="30px" width="30px" /></span>
     <span> <img src={lin} height="30px" width="30px" /></span> 
  </Card.Body>
</Card>

    </Col>
    <Col className='card2 card1'>
    <Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src={tm4} className='radius' />
  <Card.Body>
    <Card.Title className='App1'>Richard</Card.Title>
    <p className='App1'>Chief Cook</p>
    <span> <img className='fbin' src={fb} height="30px" width="30px" /></span> 
     <span> <img src={insta} height="30px" width="30px" /></span>
     <span> <img src={lin} height="30px" width="30px" /></span> 
  </Card.Body>
</Card>
    </Col>

  </Row>
        </Container>
        
                 </div>   

);
}    

export default Team;