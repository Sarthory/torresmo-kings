import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
    <div className="container-fluid home">
        <div className="col-md-4">
            <div className="story">
                <img className="story__img" alt="História" src="/img/porcoes.png"/>
                <h1 className="story__title">História</h1>
                <p className="story__explanation">
                    Of course he's a happy little stone, cause we don't have any other kind. Everyone wants to enjoy the
                    good parts - but you have to build the framework first. It's beautiful - and we haven't even done
                    anything to it yet. But we're not there yet, so we don't need to worry about it. With something so
                    strong, a little bit can go a long way. You're the greatest thing that has ever been or ever will
                    be. You're special. You're so very special.
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
                    <span>Nossas lojas</span>
                    <div className="col-sm">
                        <img alt="Nossas lojas" src="/img/our-stores.jpg"/>
                    </div>
                </Link>
                <Link className="home-tiles__link w-50" to="/menu">
                    <span>Cardápio</span>
                    <div className="col-sm">
                        <img alt="Cardápio" src="/img/menu.jpeg"/>
                    </div>
                </Link>
            </div>
            <div className="row h-50">
                <Link className="home-tiles__link w-50" to="/#">
                    <span>Merchandising</span>
                    <div className="col-sm">
                        <img alt="Merchandising" src="/img/merchan.jpg"/>
                    </div>
                </Link>
                <Link className="home-tiles__link w-50" to="/#">
                    <span>Eventos</span>
                    <div className="col-sm">
                        <img alt="Eventos" src="/img/events.jpg"/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
);

export default HomePage;