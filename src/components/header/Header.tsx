import React from 'react'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import './header.scss'
function Header() {
    return (
        <header className="header">
            <Navbar bg="dark">
                <Navbar.Brand>
                    <img
                        src="/icon.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Calendar logo"
                    />
                    <span className="ml-1 text-light">ULTIMATE CALENDAR</span>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end align-items-center">
                    <Nav className="justify-content-end">
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                <img
                                    src="http://picsum.photos/48/48/"
                                    className="header-avatar"
                                    alt="John doe"
                                />{' '}
                                Welcome John Doe
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    My profile
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Settings</Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Disconnect
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
