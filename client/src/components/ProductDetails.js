import React from 'react'
import './CSS/ProductDetail.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
    const { id, name, ima } = props.location.state.product;
    console.log(props.location)

    return (
        <div>
            <h1>details</h1>
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
                    <p>title  {props.location.state.product.title}</p>
                    <p>PRODUCT DETAILS</p>

                    <div className="detail_img">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/MSO/5GPhones/V224080254_IN_WL_5GPhones_MSO_GW_420x420_1._SX300_CB410934420_.jpg" />
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/MSO/5GPhones/V224080254_IN_WL_5GPhones_MSO_GW_420x420_1._SX300_CB410934420_.jpg" />
                    </div>
                    <div className="option">
                        <h> STYLE</h>

                        <select className="opti" name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>


                    </div>
                    <div className="option">
                        <h> FRAME</h>

                        <select className="opti" name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>


                    </div>
                    <div className="option">
                        <h> SIZE</h>

                        <select className="opti" name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
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
