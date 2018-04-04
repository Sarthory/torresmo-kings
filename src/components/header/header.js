import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-fixed-top site-header">
        <div className="col-md-4">
            <Link className="site-header__logo" to="/">
                <img width="150px" src="/img/crown.png" alt="Logo"/>
            </Link>
        </div>
        <div className="col-md-8 site-header__menu">
            <Link className="site-header__menu__item" to="/">Home</Link>
            <Link className="site-header__menu__item" to="/menu">Cardápio</Link>
            <Link className="site-header__menu__item" to="/contacts">Fale conosco</Link>
            <Link className="site-header__menu__item" to="/register">Cadastre-se</Link>
            <div className="site-header__menu__search">
                <svg viewBox="0 0 24 24">
                    <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    />
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </div>
        </div>
    </nav>
);

export default Header;