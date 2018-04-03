import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
    <div className="container home">
        <div className="col-md-4">
            <div className="story">
                <img className="story__img" alt="História" src="/img/porcao_torresmo_home.png"/>
                <h1 className="story__title">História</h1>
                <p className="story__explanation">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit a augue molestie
                    tincidunt. Morbi non nisi malesuada, hendrerit leo eleifend, hendrerit velit. Pellentesque ut lacus
                    tempor, facilisis felis nec, pretium turpis. Phasellus ut tellus quis mi feugiat interdum. Praesent
                    ullamcorper varius ipsum eu maximus.
                </p>
                <div className="story__social-media">
                    <img alt="Facebook" src="/img/facebook-32-black.png"/>
                    <img alt="Instagram" src="/img/instagram-32-black.png"/>
                </div>
            </div>
        </div>
        <div className="col-md-7 home-tiles">
            <div className="row h-50">
                <Link className="home-tiles__link w-50" to="/#">
                    <h1>Nossas lojas</h1>
                    <div className="col-sm">
                        <img alt="Nossas lojas" src="/img/our-stores.jpg" />
                    </div>
                </Link>
                <Link className="home-tiles__link w-50" to="/menu">
                    <h1>Cardápio</h1>
                    <div className="col-sm">
                        <img alt="Cardápio" src="/img/menu.jpeg" />
                    </div>
                </Link>
            </div>
            <div className="row h-50">
                <Link className="home-tiles__link w-50" to="/#">
                    <h1>Merchandising</h1>
                    <div className="col-sm">
                        <img alt="Merchandising" src="/img/merchan.jpg" />
                    </div>
                </Link>
                <Link className="home-tiles__link w-50" to="/#">
                    <h1>Eventos</h1>
                    <div className="col-sm">
                        <img alt="Eventos" src="/img/events.jpg" />
                    </div>
                </Link>
            </div>
        </div>
    </div>
);

export default HomePage;