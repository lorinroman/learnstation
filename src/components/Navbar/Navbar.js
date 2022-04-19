import React, { Component } from 'react';
import logo from '../../images/logobun.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="NavbarItems">
                <img src={logo} alt='logo' style={{ position: 'absolute', top: -33, left: 0, width: 150, height: 150 }}></img>
                <div className="top-right-buttons">
                    <button className="ui button red google ">
                        <i className="google icon" />
                        Log in
                    </button>
                    <Link to={"/signup"} className="ui button blue">
                        <i className="user plus icon"/>
                        Sign up
                    </Link>
                </div>

            </nav>
        )
    }
}

export default Navbar;
