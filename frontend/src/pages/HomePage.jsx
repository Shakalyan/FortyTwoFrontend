import React from 'react';
import {Image} from "react-bootstrap";
import pic from '../img/pic.jpg'
import "../styles/HomePage.css"

const HomePage = () => {

    return (
        <div style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>




            <h1
                style={{margin: 0, background: 'rgba(44,38,38,0.6)', color: 'white', fontSize: 128,display:'flex', justifyContent: 'center', alignContent:'center'}}
            >
                welcome to FortyTwo!
            </h1>

            {/*<div className={"divMain"}>*/}
            {/*    /!*<div className={"div1"}></div>*!/*/}
            {/*    /!*<div className={"div1"}></div>*!/*/}
            {/*</div>*/}

            <Image
                style={{
                    margin: 'auto',
                    marginTop: -200,
                    zIndex: -10
                }}
                src={pic}
                width='100%'
            />

            {/*<Link to="/posts"*/}
            {/*>*/}
            {/*</Link>*/}

        </div>
    );
};

export default HomePage;