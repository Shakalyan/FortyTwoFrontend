import React, {useEffect, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Kazakhstan from "./pages/Kazakhstan";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import './styles/Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthWindow from "./components/AuthWindow";


function App() {

    // if (!isAuth){
    //     return (
    //         <AuthWindow/>
    //     )
    // }


    return(
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="about" element={<Kazakhstan/>}/>
                    <Route path="*" element={<HomePage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;
