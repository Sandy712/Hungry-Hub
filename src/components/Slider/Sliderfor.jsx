import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import './main.css';

const Sliderfor = ({ title, image }) => {
    return (
        <Container className='box'>
            <Row className='rowbox'>
                <Col md={12} className='colbox'>
                    <h3 className='col-title'>{title}</h3>
                    {/* <Link to="/">
            <button className='btn btn-primary mx-4'>Shop now</button>
            </Link> */}
                    <img className='img-banner' src={image} alt="#" />
                </Col>
            </Row>
        </Container>
    )
}

export default Sliderfor