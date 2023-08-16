import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../Images/Logo.png"

import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/cartUiSlice";
import { Link } from 'react-router-dom';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";            //import module from firebase 
import { auth } from '../../firebase.config';


const Navbars = () => {

    const provider = new GoogleAuthProvider();
    const [pic, setpic] = useState(Logo);

    const signinwithgoogle = () => {                        //sign in function from Google
        signInWithPopup(auth, provider)
            .then((result) => {
                const name = result.user.displayName
                console.log(result);
                setpic(result.user.photoURL)
                localStorage.setItem("users", name);

            }).catch((error) => {
                console.log("sign in error");
            })
    }

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);             //import total Quantity from store redux
    const dispatch = useDispatch();

    const toggleCart = () => {                                                          //import toggle from store redux
        dispatch(cartUiActions.toggle());
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Hungry-Hub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/cart" onClick={toggleCart}><AiOutlineShoppingCart /></Link>
                            <span className="cart__badge">{totalQuantity}</span>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/" onClick={signinwithgoogle}>
                                <img src={pic} alt='user' style={{ height: "20px", width: "30px" }} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbars