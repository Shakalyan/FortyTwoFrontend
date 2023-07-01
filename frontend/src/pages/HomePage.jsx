import React from 'react';
import {Button, Image} from "react-bootstrap";
import pic from '../img/pic.jpg'
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
            <h1
                style={{margin: 0, background: 'rgba(253,253,253,0.4)', color: 'white', fontSize: 128,display:'flex', justifyContent: 'center', alignContent:'center'}}
            >
                welcome to FortyTwo!
            </h1>



            {/*<Link to="/posts"*/}
            {/*>*/}
            {/*</Link>*/}
            <Image
                style={{
                    margin: 'auto',
                    marginTop: -890,
                    zIndex: -10
                }}
                src={pic}
                width='100%'
            />
        </div>
    );
};

export default HomePage;