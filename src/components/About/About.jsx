import React from 'react';
// import './App.css';
import logo from '../../Images/applogo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import '../About/About.css'

function App() {
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Your Company</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar> */}

      <section id="about" className="about">
        <Container>
          <Row>
            <Col>
              <h1>About Us</h1>
              <p>
                Welcome to our website! We are a passionate team of
                professionals dedicated to providing exceptional
                services/products to our customers. Our mission is to...
              </p>
            </Col>
            <Col>
            <div className='d-flex flex-wrap'>
             
              <img
                src={logo}
                alt="Logo"
                className="img-fluid img-about"
              />
              {/* <h1 className='title'>HungryHub</h1> */}
            </div>

            </Col>
          </Row>
          <Row>
          <Col>
          <h1>About Us</h1>
              <p>
                Welcome to our website! We are a passionate team of
                professionals dedicated to providing exceptional
                services/products to our customers. Our mission is to...
              </p>
          </Col>
          <Col>
            <div className='d-flex flex-wrap'>
             
              <img
                src={logo}
                alt="Logo"
                className="img-fluid img-about"
              />
              {/* <h1 className='title'>HungryHub</h1> */}
            </div>

            </Col>
               
            </Row>
        </Container>
      </section>

       
    </div>
  );
}

export default App;
