import React from 'react';
import {Link} from 'react-router-dom';

const RegisterPage = () => (
    <div className="container-fluid contact-container">
        <h1>Cadastro</h1>

        <form className="contact-form">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Senha"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-10">
                    <input type="text" className="form-control" id="inputAddress" placeholder="Endereço"/>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" className="form-control" id="inputZip" placeholder="Número"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <input type="text" className="form-control" id="inputZip" placeholder="Telefone"/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="inputCity" placeholder="Cidade"/>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" className="form-control" id="inputZip" placeholder="CEP"/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Assinar Newsletter
                    </label>
                </div>
            </div>
            <button className="btn btn-danger contact-form__button">SALVAR</button>
            <input type="reset" className="btn btn-warning contact-form__button cancel" value="X"/>
        </form>
    </div>

);

export default RegisterPage;