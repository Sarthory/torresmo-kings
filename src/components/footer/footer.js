import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
    <footer className="site-footer">
        <div className="col-md-10 site-footer__menu">
            <Link className="site-footer__menu__item" to="#">Sobre o Torresmo Kings®</Link>
            <Link className="site-footer__menu__item" to="#">Termos e Condições</Link>
            <Link className="site-footer__menu__item" to="#">Trabalhe Conosco</Link>
        </div>
        <div className="col-sm-2 site-footer__icons">
            <img alt="Facebook" src="/img/facebook-6-32.png" />
            <img alt="Instagram" src="/img/instagram-32.png" />
            <img alt="WhatsApp" src="/img/whatsapp-32.png" />
        </div>
    </footer>
);

export default Footer;