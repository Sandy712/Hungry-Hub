import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
// import { Link } from "react-router-dom";
import './main.css';
 

const Sliderfor = ({ title,desc,image}) => {
    return (
        <Container className='box' style={{}}>
        <Row>
          <Col md={6}>
            <div>
            <h2 className='mx-4'>{title}</h2>
            </div>

            <p className='mx-4 desc'>{desc}</p>
           <Link to="/cart">
            <button className='btn btn-primary mx-4'>Order Now</button>
            </Link> 
            
          </Col>
          <Col md={5}>
            <img className='img' src={image} alt="#"  />
          </Col>
        </Row>
        
        
    </Container>

    )
}

export default Sliderfor