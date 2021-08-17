import React from 'react'
import "./CSS/Home.css";
import Footer from './Footer';
import img from '../components/Images/homeImg.png'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>

            <div className="Home">
                {/* <h1>home</h1> */}
                {/* <img className="Home_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg" alt="home_img" > */}




                <img className="Home_img" src={img} alt="home_img" />


            </div>
            
            <Footer />
        </div >


    )
}

export default Home
