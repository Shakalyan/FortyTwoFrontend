import React from 'react';
import {Button, Image} from "react-bootstrap";
import pic from '../img/pic.jpg'
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
            <h1
                style={{margin: 0, background: 'rgba(253,253,253,0.4)', color: 'white', fontSize: 150,display:'flex', justifyContent: 'center', alignContent:'center'}}
            >
                Helvetica
            </h1>
            <h1
                style={{margin: 0, background: 'rgba(6,27,120,0.4)', color: 'white', fontSize: 150,display:'flex', justifyContent: 'center', alignContent:'center'}}
            >
                wellcum!
            </h1>
            <div
                style={{margin: 0, background: 'rgba(193,55,41,0.4)', color: 'white', display:'flex', justifyContent: 'center', alignContent:'center'}}
            >
                <h1
                    style =  {{fontSize: 150}}
                >
                    wellcum!
                </h1>

            </div>


            {/*<Link to="/posts"*/}
            {/*>*/}
            {/*</Link>*/}
            <Image
                style={{
                    margin: 'auto',
                    marginTop: -700,
                    zIndex: -10
                }}
                src={pic}
                width='100%'
            />
        </div>
    );
};

export default HomePage;