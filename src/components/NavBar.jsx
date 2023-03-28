import React from "react";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="row">
            <div className='col'>
                <nav className="navbar navbar-expand-lg navColorLogo">
                    <div className=" container-fluid ">
                        <div className="row">
                            <Link className="navbar-brand" to={"/"}>
                                <img src={"https://i.imgur.com/xDoLQBr.jpg"} alt={"logo"} className="w-50"/>
                            </Link>
                            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                        </div>
                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav navHover nav-item m-3">
                                <NavLink className="nav-item nav-link text-white" to={"/category/residential"}><span className="navColorLetter">Residential</span></NavLink>
                                <NavLink className="nav-item nav-link text-white" to={"/category/commercial"}><span className="navColorLetter">Commercial</span></NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavBar