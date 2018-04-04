import React from 'react';
import {Link} from "react-router-dom";

const MenuPage = () => (
    <div className="container menu-container">
        <div className="row">
            <div className="col">
            </div>
            <div className="col-8 menu">
                <Link to="/products" className="menu__item">
                    <div className="menu__item__thumb--portions">
                    </div>
                    <div className="menu__item__info">
                        <h2 className="menu__item__info__name">
                            Porções
                        </h2>
                        <span className="menu__item__info__description">
                            <p>Trees get lonely too, so we'll give him a little friend.
                                You're meant to have fun in life.
                                Use what you see, don't plan it. Son of a gun.
                                These trees are so much fun.
                                I get started on them and I have a hard time stopping.</p>
                        </span>
                    </div>
                </Link>

                <Link to="#" className="menu__item">
                    <div className="menu__item__thumb--drinks">
                    </div>
                    <div className="menu__item__info">
                        <h2 className="menu__item__info__name">
                            Bebidas
                        </h2>
                        <span className="menu__item__info__description">
                            <p>Just go out and talk to a tree. Make friends with it.
                                Isn't that fantastic? You can just push a little tree out of your brush like that.
                                Maybe he has a little friend that lives right over here.
                                This is your world, whatever makes you happy you can put in it. Go crazy.
                                A beautiful little sunset. And just raise cain.</p>
                        </span>
                    </div>
                </Link>

                <Link to="#" className="menu__item">
                    <div className="menu__item__thumb--lunches">
                    </div>
                    <div className="menu__item__info">
                        <h2 className="menu__item__info__name">
                            Lanches Especiais
                        </h2>
                        <span className="menu__item__info__description">
                            <p>Let's make some happy little clouds in our world.
                                Maybe there's a little something happening right here.
                                If you didn't have baby clouds, you wouldn't have big clouds. Son of a gun.
                                Little trees and bushes grow however makes them happy.
                                You are only limited by your imagination.</p>
                        </span>
                    </div>
                </Link>
            </div>
            <div className="col">
            </div>
        </div>
    </div>
);

export default MenuPage;