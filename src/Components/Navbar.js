import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary" to="/" >Component Demo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/" >Feature Viewer Component</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/table" >Chromosomal Data using Table</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/other" >Other Components</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
