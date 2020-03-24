import React from "react";
import { Link } from 'react-router-dom'
import "../assets/css/Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row justify-content-around footer-nav py-3">
                    <div className="col-md-6 footer-item title">
                        <h1>Meet Help</h1>
                    </div>

                    <div className="col-md-6 footer-item description py-3">
                        Please don't fuck it up ;_;
                    </div>


                </div>
                <div className="row justify-content-around footer-nav">
                    <div className="col footer-item footer-item-nav">
                        <Link className="footerlink" to="/">
                            Home
                        </Link>
                    </div>

                    <div className="col footer-item footer-item-nav">
                        <Link className="footerlink" to="/create">
                            Create Classroom
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;