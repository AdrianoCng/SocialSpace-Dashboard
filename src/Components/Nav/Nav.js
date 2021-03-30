import React from "react";
import { Dropdown } from "react-bootstrap";
import "./nav.css";

const Nav = ({ setToggle }) => {

    const handleOnClick = () => {
        setToggle(prev => !prev);
    };

    return (
        <nav id="navbar" className="navbar navbar-expand navbar-dark bg-dark fixed-top">
            <button onClick={handleOnClick} className="btn btn-link btn-sm mr-3" type="button" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
            <a className="navbar-brand" href="index.html">SocialSpace Dashboard</a>

            {/* Navbar Search */}
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>

            {/* Navbar Dropdown*/}
            <Dropdown aria-haspopup aria-expanded="false" role="button" className="ml-auto ml-md-0">
                <Dropdown.Toggle variant="dark" id="userDropdown">
                    <span><i className="fas fa-user fa-fw"></i></span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                    <Dropdown.Item href="#">Activity Log</Dropdown.Item>
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}

export default Nav;