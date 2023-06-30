import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import logo from "./img/kazakh.svg";
import Footer from "./components/myFooter/Footer";
// import {MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow} from "mdb-react-ui-kit";

const Layout = () => {
    return (
        <>
            <Navbar fixed='top' sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            alt=""
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Черви
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Navbar.Text>Loh pidr</Navbar.Text>
                </Container>
            </Navbar>
            <Outlet/>
            <Footer></Footer>
        </>
    );
};

export default Layout;