import React from "react";

let Footer = () => {
    let time = new Date();
    let currentYear = time.getFullYear();

    return (
        <footer className="footer">
            <p className="p">Copyright {currentYear}</p>
        </footer>
    );
};

export default Footer;