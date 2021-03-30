import React from "react";
import { Accordion } from "react-bootstrap";
import "./sideNav.css";

const SideNav = () => {
    return (
        <div className="sidenav">
            <nav id="sidenavAccordion">
                {/* SIDENAV MENU */}
                <div className="sidenav-menu">
                    <div className="nav">
                        {/* 1 heading */}
                        <div className="sidenav-menu-heading">CORE</div>
                        <a className="nav-link active" href="#">
                            <div className="nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Dashboard
                        </a>

                        {/* 2 heading */}
                        <div className="sidenav-menu-heading">INTERFACE</div>
                        <a className="nav-link" href="#">
                            <div className="nav-link-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            Users
                        </a>

                        <Accordion>
                            <Accordion.Toggle as="div" eventKey="0">
                                <a className="nav-link" href="#">
                                    <div className="nav-link-icon">
                                        <i className="fas fa-comments"></i>
                                    </div>
                                    Posts
                                    <div className="sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </a>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="#">Comments</a>
                                    <a className="nav-link" href="#">Likes</a>
                                </nav>
                            </Accordion.Collapse>
                        </Accordion>

                        {/* 3 heading */}
                        <div className="sidenav-menu-heading">ADDONS</div>
                        <a className="nav-link" href="#">
                            <div className="nav-link-icon">
                                <i className="fas fa-chart-area"></i>
                            </div>
                            Charts
                        </a>
                        <a className="nav-link" href="#">
                            <div className="nav-link-icon">
                                <i className="fas fa-table"></i>
                            </div>
                            Tables
                        </a>
                    </div>
                </div>

                {/* SIDENAV FOOTER */}
                <div className="sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Admin
                </div>
            </nav>
        </div>
    );
};

export default SideNav;