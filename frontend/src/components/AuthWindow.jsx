import React from 'react';
import {Button} from "react-bootstrap";
import "../styles/LoginPage.css"
import {useDispatch} from "react-redux";
import {setIsAuth} from "../store/actions/setIsAuth";
import {useNavigate} from "react-router-dom";

const AuthWindow = () => {

    const dispatch = useDispatch();

    const nav = useNavigate()
    const handleVKLogin = () => {
        window.open("sidrDetyam.com/v1/oauth2");
        // window.location.assign("sidrDetyam.com/v1/oauth2");
        // nav("sidrDetyam.com/v1/oauth2")
        // dispatch(setIsAuth(true));
        // localStorage.setItem('isAuth', 'true')
    };

    return (
        <div className="Login-wrapper">
            <div className="Login-content">
                <h2>Аутентификация =)</h2>
                <p style={{color:"black"}}>Данный сайт предназначен сугубо для лиц 18 лет и старше. Если вы моложе 18 лет, то, пожалуйста, покиньте этот сайт. Этот сайт содержит изображения, видео, аудио, текст для взрослых людей, занимающихся действиями сексуального характера. Если доступ и просмотр материалов для взрослых не законен для Вас, пожалуйста, покиньте сайт прямо сейчас.</p>
                <a
                    href={"http://sidrDetyam.com:8080/v1/oauth2"}
                    // onClick={handleVKLogin}
                    className="age-verification-button-enter">
                    <div className="age-verification-button-enter-before">
                    </div>
                    <span>Войти через ВК</span>
                </a>
            </div>
        </div>
    );
};

export default AuthWindow;