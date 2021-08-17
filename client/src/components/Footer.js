import React from 'react'
import './CSS/Footer.css'
import { Link } from "react-router-dom"
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { IconName, FaFacebookSquare, FaPinterest, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="Footer">
            <h1>footer</h1>
            <br />
            <hr width="95%" />
            <div className="Footer_cont">
                <div className="Content">
                    <h>COMPANY</h>
                    <h4>shipping</h4>
                    <h4>Return Policy</h4>
                    <h4>Work with us</h4>
                    <h4>Terms & Conditions</h4>
                </div>
                <div className="Content">
                    <h>FOLLOW US OUT THERE</h>
                    <h4><FaFacebookSquare />FaceBook
                    </h4>
                    <h4><FaTwitter />Twitter</h4>
                    <h4><FaPinterest />Pinterest</h4>
                    <h4><FaInstagram />Instagram</h4>

                </div>
                <div className="Content">

                    <h>THANK YOU</h>
                    <h4>Thank you so she wonderful folks over
                    </h4>
                    <h4>
                        at Herbivore for letting us use their
                    </h4>

                    <h4> beaunimagery in this demo Head over</h4>


                    <h4> to the store to shop their full catalog of</h4>


                    amazing products
                </div>
                <div className="Content">

                    <i class="fab fa-facebook-f"></i>
                    <h>NEWSLETTER</h>
                    <h></h>
                    <div className="searchs">
                        <>
                            <input type="text" placeholder="@gmails " className="search" />

                        </>
                        <button >

                            SUBSRIBE

                        </button>

                    </div>

                </div>

            </div>

            <div className="Footer_copywrite">
                <h5>Copyright @ 2021 <h> Nithesh <br /> powered by Rao</h></h5>

            </div>
        </div >
    )
}

export default Footer
