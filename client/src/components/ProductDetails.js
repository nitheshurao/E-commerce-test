import React from 'react'
import './CSS/ProductDetail.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
    const { id, name, ima } = props.location.state.product;
    // console.log(props.location)
    // const Style = props.location.state.product.style.map((style) => {
    //     <select className="opti" name="style" id="style">
    //         return (

    //         <option value="">{style}</option>

    //         console.log({style});

    //         );
    //     </select>
    // });

    return (
        <div className="div">
            <h1>{props.location.state.product.detail}</h1>
            <div className="product">

                <div className="prodcut_img">
                    <div className="imgg">
                        {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/MSO/5GPhones/V224080254_IN_WL_5GPhones_MSO_GW_420x420_1._SX300_CB410934420_.jpg" /> */}
                        <img className="img" src={props.location.state.product.img} />
                    </div>


                </div>
                <div className="detail">
                    <h>FRAMED ART WORDK</h>
                    <hr width="95%" />
                    <p> {props.location.state.product.title} by {props.location.state.product.name}</p>
                    <p>PRODUCT DETAILS</p>

                    <div className="detail_img">
                        <img src={props.location.state.product.img[0]} />
                        <img src={props.location.state.product.img[1]} />
                    </div>
                    <div className="option">
                        <h> STYLE</h>

                        <select className="opti" name="style" id="style">
                            <option value="">{props.location.state.product.style[0]}</option>

                            <option value="Abstract">{props.location.state.product.style[1]}</option>
                            <option value="Modernism">{props.location.state.product.style[2]}</option>
                            <option value="Expressionism">{props.location.state.product.style[3]}</option>
                        </select>


                    </div>
                    <div className="option">
                        <h> FRAME</h>

                        <select className="opti" name="fram" id="fram">
                            <option value="black">{props.location.state.product.frame[0]}</option>
                            <option value="White">{props.location.state.product.frame[1]}</option>
                            <option value="Gold">{props.location.state.product.frame[2]}</option>

                        </select>


                    </div>
                    <div className="option">
                        <h> SIZE</h>

                        <select className="opti" name="Size" id="Size">
                            <option value="8×10 ">{props.location.state.product.size[0]}</option>
                            <option value="16×20 ">{props.location.state.product.size[1]}</option>
                            <option value="4×6">{props.location.state.product.size[2]}</option>

                        </select>


                    </div>
                    <p>Deny Design is for wholssale customer only</p>
                    <Link to='/login'><button className="btn">WHOLESALE LOGIN</button></Link>

                </div>


            </div>
            <Footer />
        </div>

    )
}

export default ProductDetails
