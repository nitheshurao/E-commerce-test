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

                    </div></Link>



                    <div className="Options">
                        <h>COLLECTIONS</h>
                    </div>
                    <div className="Options">
                        <h>OUR STORY</h>
                    </div>
                    <div className="Options">
                        <h>ART</h>
                    </div>
                    <div className="Options">
                        <h>WHOLESALE</h>
                    </div>

                    <div className="Nav_search">
                        <input type="text" className="Nav_searchInput" />
                        <SearchIcon className="Nav_searchIcon" />
                    </div>
                    <div className="Nav_User">

                        < PermIdentityIcon />

                    </div>


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
