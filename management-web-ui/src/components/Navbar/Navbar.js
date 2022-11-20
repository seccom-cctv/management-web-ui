import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { redirectToLogin } from '../../services/wso2';

const ScreenNavbar = () => {

    const [navbarClass, setNavbarClass] = useState(true);

    // On scrool, make navbar animation
    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            // Get scroll position
            if (window.pageYOffset > 25) {
                setNavbarClass(false);
            } else {
                setNavbarClass(true);
            }
        });
    }, []);
    

    return (
        <Navbar fixed="top" expand="lg" className={navbarClass ? "navbar" : "navbar-big shadow-sm p-3"} data-testid="Navbar">
            <Container>
                <Navbar.Brand href="/" className='logo-wrapper'>
                    <h2 className='navbar-header'>SecCom</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{padding: "0 2rem"}}>
                        <Nav.Link style={{paddingLeft: "1rem", paddingRight: "1rem"}}>
                            <Link className='navbar-item navbar-item-change' to="/">Home</Link>
                        </Nav.Link>
                        <NavDropdown style={{paddingLeft: "1rem", paddingRight: "1rem"}} title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link className='navbar-item navbar-item-change' to="/cameras">Cameras</Link></NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='navbar-item navbar-item-change' to="/sensors">Sensors</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-item navbar-item-change' to="/services">Alarms</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link className='navbar-item navbar-item-change' to="/settings">Help</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={{paddingLeft: "1rem", paddingRight: "1rem"}}>
                            <Link className='navbar-item navbar-item-change' to="/settings">Settings</Link>
                        </Nav.Link>
                        <div>
                            {<button onClick={() => redirectToLogin()}>login</button>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ScreenNavbar;