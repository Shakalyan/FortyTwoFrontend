import React, {useEffect, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Kazakhstan from "./pages/Kazakhstan";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
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
