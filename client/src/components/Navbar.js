import React from 'react'
import "./CSS/Navbar.css"
import SearchIcon from "@material-ui/icons/Search"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div>


            <div className="Nav_top">

                <div className="Nav_top">
                    <div className="Nav_logo">
                        <h3>DenyDesigns.</h3>
                    </div>
                    <Link to="/product"><div className="Options">

                        <h>PRODUCTS</h>

                    </div>

                    </Link>



                    <div className="Options">
                        <Link to=""> <h>COLLECTIONS</h></Link>

                    </div>

                    <div className="Options">
                        <Link to="/form">    <h>OUR STORY</h></Link>

                    </div>
                    <div className="Options">
                        <Link to="/">
                            <h>ART</h>
                        </Link>

                    </div>
                    <div className="Options">
                        <Link to=""> <h>WHOLESALE</h></Link>

                    </div>

                    <div className="Nav_search">
                        <input type="text" className="Nav_searchInput" />
                        <SearchIcon className="Nav_searchIcon" />
                    </div>
                    <Link to='/login'>  <div className="Nav_User">

                        < PermIdentityIcon />

                    </div> </Link>



                </div>

                {/* <div>
                    <h>PRODUCTS</h>
                </div>

                <h>COLLECTIONS</h>
                <h> OUR STORY</h>
                <h>ART</h>
                <h>WHOLSALE</h>
                <input type="text" placeholder="Search" /> */}
            </div >
        </div>
    )
}

export default Navbar
