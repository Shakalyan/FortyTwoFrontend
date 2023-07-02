import React, {useEffect, useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet, useNavigate, useSearchParams} from "react-router-dom";
import logo from "../img/kazakh.svg";
import Footer from "./myFooter/Footer";
import "../styles/Layout.css";
import AuthWindow from "./AuthWindow";
import HomePage from "../pages/HomePage";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth} from "../store/actions/setIsAuth";
import {ACCESS_TOKEN, REFRESH_TOKEN, USER_NAME_LC} from "../Consts";
import api, {api_rejected} from "../Api";
import {setFirstName} from "../store/actions/setFirstName";

const Layout = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.isAuth);
    const firstName = useSelector(state => state.firstName);

    useEffect(() => {
        const access = searchParams.get("access")
        const refresh = searchParams.get("refresh")
        if(access !== null){
            localStorage.setItem(ACCESS_TOKEN, access)
            localStorage.setItem(REFRESH_TOKEN, refresh)

            api_rejected.get("users/current-info")
                .then(response => {
                    console.log(response.data)
                    localStorage.setItem(USER_NAME_LC, response.data.first_name)
                    dispatch(setFirstName(response.data.first_name))
                })
                .catch(reason => console.log(reason))

            dispatch(setIsAuth(true))
            navigate("/")
        }
    }, [])

    const handleLogout = () => {
        console.log('LOGOUT');
        dispatch(setIsAuth(false));
        localStorage.removeItem(ACCESS_TOKEN)
        localStorage.removeItem(REFRESH_TOKEN)
        // Обработчик нажатия на кнопку "Войти через ВК"
        // Выполните здесь необходимые действия для входа через ВК
    };


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
                                        <Navbar.Text>{firstName}</Navbar.Text>
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