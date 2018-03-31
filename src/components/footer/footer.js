import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
    <footer>
        <div className="col-md-6">
            <Link className="site-header__menu__item" to="/menu">Sobre o Torresmo Kings®</Link>
            <Link className="site-header__menu__item" to="/menu">Termos e Condições</Link>
            <Link className="site-header__menu__item" to="/menu">Trabalhe Conosco</Link>
        </div>
        <div className="col-sm-4 footer-menu">
            <img alt="Facebook" src="/img/facebook-6-32.png" />
            <img alt="Instagram" src="/img/instagram-32.png" />
            <img alt="WhatsApp" src="/img/whatsapp-32.png" />
        </div>
    </footer>
);

export default Footer;