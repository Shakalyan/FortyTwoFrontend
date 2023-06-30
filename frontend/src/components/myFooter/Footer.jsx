import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <p>
                    &copy;{new Date().getFullYear()} Your Website. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;