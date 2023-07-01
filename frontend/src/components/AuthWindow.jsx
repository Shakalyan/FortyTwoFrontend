import React from 'react';
import {Button} from "react-bootstrap";
import "../styles/LoginPage.css"
import {useDispatch} from "react-redux";
import {setIsAuth} from "../store/actions/setIsAuth";

const AuthWindow = () => {

    const dispatch = useDispatch();
    const handleVKLogin = () => {
        console.log('NAZHAL');
        dispatch(setIsAuth(true));
        // Обработчик нажатия на кнопку "Войти через ВК"
        // Выполните здесь необходимые действия для входа через ВК
    };

    console.log("Отрисовался")

    return (
        <div className="Login-wrapper">
            <div className="Login-content">
                <h2>Аутентификация =)</h2>
                <Button variant="dark" onClick={handleVKLogin}>Войти через ВК</Button>
            </div>
        </div>
    );
};

export default AuthWindow;