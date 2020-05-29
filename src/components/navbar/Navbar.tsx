// import { useContext } from "react";
// import { ConfigContext } from "../../context/config.context";
import React from "react";
import "./navbar.scss";
import { useDispatch, useSelector } from 'react-redux'
import { setConfig } from "../../store/config/config.action";
import { RootState } from "../../store";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const CnlNavbar = () => {

    const selectConfig = (state: RootState) => state.config;
    const config = useSelector(selectConfig);
    const location = useLocation();

    const dispatch = useDispatch();
    return (

        <Navbar bg="light" expand="lg">
            <div className="container">
                <Link to="/">
                    <Navbar.Brand>Carnelian</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link>
                            <Link to="/">Dashboard</Link>
                        </Nav.Link>


                        <Nav.Link>
                            <Link to="/workshop">Workshop</Link>
                        </Nav.Link>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <NavDropdown title="John Doe" id="basic-nav-dropdown">

                            <NavDropdown.Item>
                                <Link to="/account">Account</Link>
                            </NavDropdown.Item>


                            <NavDropdown.Item>
                                <Link to="/settings">Settings</Link>
                            </NavDropdown.Item>


                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Disconnect</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

        // <div className="sidebar">
        //     <div className="header-logo">
        //         <span onClick={() => { dispatch(setConfig({ ...config, version: "toto" })) }}>CARNELIAN {config.version}</span>
        //     </div>

        //     <ul className="sidebar-menu nav flex-column nav-pills">
        //         <li className="nav-item">
        //             <Link to="/">
        //                 <span className={`nav-link ${location.pathname === '/' ? "active" : ""}`}>Dashboard</span>
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/workshop">
        //                 <span className={`nav-link ${location.pathname === '/workshop' ? "active" : ""}`}>Workshop</span>
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/account">
        //                 <span className={`nav-link ${location.pathname === '/account' ? "active" : ""}`}>Account</span>
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/settings">
        //                 <span className={`nav-link ${location.pathname === '/settings' ? "active" : ""}`}>Settings</span>
        //             </Link>
        //         </li>
        //     </ul>

        //     <div className="ad">
        //         <span>AD</span>
        //     </div>

        // </div>

    )
}

export default CnlNavbar;