import React from 'react';
import {Button, Image} from "react-bootstrap";
import pic from '../img/pic.jpg'
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
            <h1
                style={{fontSize: 150,display:'flex', justifyContent: 'center', alignContent:'center'}}
            >
                HOME PAGE
            </h1>
            <Link to="/posts"
            >
            </Link>
            <Image
                style={{margin: 'auto', marginBottom: 50}}
                src={pic}
                rounded
                width='80%'
            />
        </div>
    );
};

export default HomePage;