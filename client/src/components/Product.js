import React, { useState, useEffect } from 'react'
import img from './Images/homeImg.png'
import "./CSS/Product.css";
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { id, name, email } = props.product;
    console.log(props)

    return (

        < div >


            <div className="products">
                <div className="content">
                    {/* <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        > */}

                    <Link to={{
                        pathname: `/product/${id}`
                        , state: { product: props.product },
                    }

                    }
                    >
                        {/* // {`/product/${id}`}> */}
                        <div className="product_img">
                            {/* <img className="img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/MSO/5GPhones/V224080254_IN_WL_5GPhones_MSO_GW_420x420_1._SX300_CB410934420_.jpg" alt="home_img" /> */}
                            <img className="img" src={props.product.img} />
                        </div>
                        <div className="content">
                            <div className="header">{props.product.title}</div>
                            <div className="meta price">props</div>
                            <div className="meta">category</div>
                        </div>

                    </Link>

                </div>

            </div>

            {/* <Footer /> */}


        </ div >

    )
}

export default Product
