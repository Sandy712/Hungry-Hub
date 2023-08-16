import React from 'react'
import { FaStar } from "react-icons/fa"
import { AiFillPlusCircle } from "react-icons/ai";
import { Col } from 'react-bootstrap';


import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProdCard = (props) => {
    const { id, title, image, price } = props.item;


    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image,
                price,
            })
        );
    };

    return (
        <>
            <Col md={3} sm={4} xs={8} className="product mtop">
                <h5>
                    <p >{title}</p>
                </h5>
                <img loading="lazy" src={image} alt="" style={{ "width": "50px", height: "100px" }} />
                <div className="product-details">
                    <div className="rate">
                        <FaStar style={{ color: "#fbdf50", }} />
                        <FaStar style={{ color: "#fbdf50", }} />
                        <FaStar style={{ color: "#fbdf50", }} />
                        <FaStar style={{ color: "#fbdf50", }} />
                        <FaStar style={{ color: "#fbdf50", }} />
                    </div>
                    <div className="price">
                        <button aria-label="Add" type="submit" className="add" onClick={() => addToCart()}>
                            <AiFillPlusCircle />
                        </button>
                        <h4>Rs.{price}</h4>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default ProdCard