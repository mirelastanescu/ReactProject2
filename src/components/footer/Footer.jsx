import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Link-uri rapide:</h3>
                    <Link to='/about' className="text-dark">Despre</Link>
                    <Link to='/terms-and-conditions' className="text-dark">Termeni și condiții</Link>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="mailto:proiect@react.com" className="text-dark">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            proiect@react.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40123</p>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="https://www.google.com" className="text-dark">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            proiectReact
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.google.com" className="text-dark">
                            <LinkedIn className="mr-1 footer-icon"/>
                            proiectReact
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; ProiectReact, 2023
            </div>
        </footer>
    );
}

export default Footer;