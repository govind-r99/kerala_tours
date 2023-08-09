import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container box_1620">
                        <Link className="navbar-brand logo_h" to="/"><img src="../img/kslogo.png" style={{ width: "75%" }} /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav justify-content-end">
                                <li className="nav-item "><NavLink className="navlink" to="/">Home</NavLink></li>
                                <li className="nav-item "><NavLink className="navlink" to="/packages">Packages</NavLink></li>
                                {/* <li className="nav-item submenu dropdown">
                                    <NavLink className="navlink" to="/packages">Packages</NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog Single</a></li>
                                        <li className="nav-item"><a className="nav-link" href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item"><NavLink className="navlink" to="/gallery">Gallery</NavLink></li>
                                <li className="nav-item"><NavLink className="navlink" to="/contact">Contact</NavLink></li>
                                <li className="nav-item"><NavLink className="navlink" to="/about">About</NavLink></li>
                            </ul>

                            <div className="nav-right text-center text-lg-right py-4 py-lg-0">
                                <Link className="button" to="/packages">Search Packages</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header