import React from 'react';

let time = new Date().getFullYear();

function Footer() {

    return (
        <footer>
            <p>copyright © {time}</p>
            
        </footer>
    )
}

export default Footer;