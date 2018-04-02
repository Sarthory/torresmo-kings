import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
    <div className="container home">
        <div className="col-md-4">
            <div className="story">
                <img className="story__img" src="/img/porcao_torresmo_home.png"/>
                <h1 className="story__title">História</h1>
                <p className="story__explanation">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit a augue molestie tincidunt. Morbi non nisi malesuada, hendrerit leo eleifend, hendrerit velit. Pellentesque ut lacus tempor, facilisis felis nec, pretium turpis. Phasellus ut tellus quis mi feugiat interdum. Praesent ullamcorper varius ipsum eu maximus.
                </p>
                <div className="story__social-media">
                    <img alt="Facebook" src="/img/facebook-32-black.png" />
                    <img alt="Instagram" src="/img/instagram-32-black.png" />
                </div>
            </div>
        </div>
        <div className="col-md-7 home-tiles">
            <div className="row h-50">
                <div className="col-sm our-stores">
                    <h1><Link className="our-stores__link" to="/#">Nossas Lojas</Link></h1>
                </div>
                <div className="col-sm home-menu">
                    <h1><Link className="home-menu__link" to="/menu">Cardápio</Link></h1>
                </div>
            </div>
            <div className="row h-50">
                <div className="col-sm merchandising">
                    <h1><Link className="merchandising__link" to="/#">Merchandising</Link></h1>
                </div>
                <div className="col-sm events">
                    <h1><Link className="events__link" to="/#">Eventos</Link></h1>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;