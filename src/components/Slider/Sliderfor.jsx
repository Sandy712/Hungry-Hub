import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

import './main.css';


const Sliderfor = ({ title, desc, image }) => {

  const handleOrderNowClick = () => {
     
    const foodSection = document.getElementById('menuviews');
    if (foodSection) {
      foodSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Container className='box' style={{}}>
      <Row>
        <Col md={6}>
          <div>
            <h2 className='mx-4'>{title}</h2>
          </div>

          <p className='mx-4 desc'>{desc}</p>

          <button className='btn btn-primary mx-4' onClick={handleOrderNowClick}>Order Now</button>

        </Col>
        <Col md={5}>
          <img className='img' src={image} alt="#" />
        </Col>
      </Row>


    </Container>

  )
}

export default Sliderfor