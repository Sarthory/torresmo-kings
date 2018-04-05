import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ProductsPage extends Component {

    state = {
        portion: {
            name: "Porção Heart Attack",
            description: `Maybe there's a little something happening right here.
            If you didn't have baby clouds, you wouldn't have big clouds. Son of a gun.
            Little trees and bushes grow however makes them happy.`
        }
    };


    // detailProduct(){
    //     this.setState({
    //         porcao:{
    //             name: 
    //         }
    //     })
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 products-container">
                        <div className="products-side-menu">
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
                        <div className="products">
                            <div className="products__detail">
                                <div className="products__detail__thumb"/>
                                <div className="products__detail__info">
                                    <h2 className="products__detail__info__name">
                                        {this.state.portion.name}
                                    </h2>
                                    <span className="products__detail__info__description">
                                        <p>{this.state.portion.description}</p>
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
                                <div id="left-slide" className="products__slider__left-arrow">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                                    </svg>
                                </div>
                                <div id="slider">
                                    <ul id="slider-items" className="products__slider__thumbs">
                                        <li id="prod-1" className="product-thumb--1"/>
                                        <li id="prod-2" className="product-thumb--2"/>
                                        <li id="prod-3" className="product-thumb--3"/>
                                        <li id="prod-4" className="product-thumb--4"/>
                                        <li id="prod-5" className="product-thumb--5"/>
                                        <li id="prod-6" className="product-thumb--6"/>
                                        <li id="prod-7" className="product-thumb--7"/>
                                        <li id="prod-8" className="product-thumb--8"/>
                                        <li id="prod-9" className="product-thumb--9"/>
                                    </ul>
                                </div>
                                <div id="right-slide" className="products__slider__right-arrow">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                    </svg>
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