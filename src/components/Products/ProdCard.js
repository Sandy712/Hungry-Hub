import React from 'react'
import { FaStar } from "react-icons/fa"
// import { AiFillPlusCircle } from "react-icons/ai";
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
                <div className='prod-card '> 
                <h5>
                    <p >{title}</p>
                </h5>
                <div className='d-flex' style={{alignItems:'center', justifyContent:'center'}}>
                <img loading="lazy" src={image} alt="" className='prod-img' />
                </div>

                <div className="product-details">
                    <div className="rate">
                        <FaStar style={{ color: "#fbdf50", }} />
                        <FaStar style={{ color: "#fbdf50", }} />
                        <FaStar style={{ color: "#fbdf50", }} />
                        <FaStar style={{ color: "#fbdf50", }} />
                        <FaStar style={{ color: "#fbdf50", }} />
                    </div>
                    <div className="price p-cart d-flex" style={{marginTop:5}}>
                        <h4>Rs.{price}</h4>
                        <button aria-label="Add" type="submit" className="add btn btn-success" onClick={() => addToCart()}>
                             Add to cart
                        </button>
                    </div>
                </div>
                </div>
            </Col>
        </>
    )
}

export default ProdCard