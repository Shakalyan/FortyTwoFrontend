import React, {useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import logo from "../img/kazakh.svg";
import Footer from "./myFooter/Footer";
import "../styles/Layout.css";
import AuthWindow from "./AuthWindow";
import HomePage from "../pages/HomePage";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth} from "../store/actions/setIsAuth";

const Layout = () => {

    let isAuth = useSelector(state => state.isAuth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log('LOGOUT');
        dispatch(setIsAuth(false));
        // Обработчик нажатия на кнопку "Войти через ВК"
        // Выполните здесь необходимые действия для входа через ВК
    };

    const [showWindow, setShowWindow] = useState(false);


    return (

        <div className="Layout-wrapper">
            {!isAuth?
                <>
                    <HomePage/>
                    <AuthWindow/> : <></>
                </> :
                <>
                    <div className="Layout-content">
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
                                    FortyTwo
                                </Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                </Nav>
                                {isAuth?
                                    <>
                                        <Navbar.Text>loshara</Navbar.Text>
                                        <Button variant="dark" onClick={handleLogout}>Log out</Button>
                                    </>
                                    : null
                                }
                            </Container>
                        </Navbar>



                        <Outlet/>
                        {/*{isAuth? <AuthWindow/> : null}*/}

                    </div>
                    <div className="Layout-footer">
                        <Footer/>
                    </div>
                </>

            }
        </div>
    );
};

export default Layout;