import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    // Function to prevent default behavior of Link
    const handleClick = (e) => {
    };

    var ps_locations = ["/introduction-ps/", "/perceptual-speed-find-a/", "/perceptual-speed-numbers/", "/perceptual-speed-shapes/", "/perceptual-speed-find-a-train/", "/perceptual-speed-numbers-train/", "/perceptual-speed-shapes-train/"]
    var vwm_locations = ["/introduction-vwm/", "/vwm-instructions/", "/vwm-train/", "/vwm-test-trial/"]

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse ">
                    <ul className="nav navbar-nav">
                        <li className={`nav-item ${location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}`}>
                            <Link
                                className="nav-link"
                                to="/home"
                                onClick={handleClick}
                            >
                                Home
                            </Link>
                        </li>
                        <li className={`nav-item ${ps_locations.includes(location.pathname) ? 'active' : ''}`}>
                            <Link
                                className="nav-link"
                                to="/introduction-ps"
                                onClick={handleClick}
                            >
                                Perceptual Speed
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${vwm_locations.includes(location.pathname) ? 'active' : ''}`} role="button"
                                onClick={handleClick} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Visual Working Memory
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/introduction-vwm">Test</Link>
                                <Link className="dropdown-item" to="/vwm-settings">Change Test Settings</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;