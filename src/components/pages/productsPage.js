import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ProductsPage extends Component {

    render() {
        return (
            <div className="container products-container">
                <div className="row">
                    <div className="col-3 products-side-menu">
                        <Link to="#" className="products-side-menu__item selected">
                            <div className="products-side-menu__item__thumb--portions"/>
                            <span className="products-side-menu__item__name">
                                Porções
                            </span>
                        </Link>
                        <Link to="#" className="products-side-menu__item">
                            <div className="products-side-menu__item__thumb--drinks"/>
                            <span className="products-side-menu__item__name">
                                Bebidas
                            </span>
                        </Link>
                        <Link to="#" className="products-side-menu__item">
                            <div className="products-side-menu__item__thumb--lunches"/>
                            <span className="products-side-menu__item__name">
                                Lanches
                            </span>
                        </Link>
                        <Link to="/menu" className="products-side-menu__item">
                            <span className="products-side-menu__item__name">
                                Cardápio
                            </span>
                        </Link>
                    </div>
                    <div className="col-9">
                        <div className="container products">
                            <div className="products__detail">
                                <div className="products__detail__thumb"/>
                                <div className="products__detail__info">
                                    <h2 className="products__detail__info__name">
                                        Lanches Especiais
                                    </h2>
                                    <span className="products__detail__info__description">
                                        <p>Let's make some happy little clouds in our world.
                                            Maybe there's a little something happening right here.
                                            If you didn't have baby clouds, you wouldn't have big clouds. Son of a gun.
                                            Little trees and bushes grow however makes them happy.
                                            You are only limited by your imagination.</p>
                                    </span>
                                    <Link to="#" className="products__detail__info__nutrition-facts">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                        </svg>
                                        <span>Informações Nutricionais</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="products__slider">
                                <div className="products__slider__left-arrow">
                                   *-
                                </div>
                                <div className="products__slider__thumbs">
                                    thumbs
                                </div>
                                <div className="products__slider__right-arrow">
                                    -*
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsPage;