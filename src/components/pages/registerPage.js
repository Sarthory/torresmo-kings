import React from 'react';
import {Link} from 'react-router-dom';

const RegisterPage = () => (
    <div className="container contact-container">
        <h1>Cadastro</h1>
        <span>Campos com * são de preenchimento obrigatório</span>
        <form className="form-group contact-form">
            <input placeholder="*Nome" className="form-control contact-form__input" type="text"/><br/>
            <input placeholder="*E-mail" className="form-control" type="email"/><br/>
            <input placeholder="*Senha" className="form-control" type="password"/><br/>
            <input placeholder="*Confirmar senha" className="form-control" type="password"/><br/>
            <input placeholder="Telefone (00)00000-0000 " id="phone" className="form-control" type="text"/><br/>
            <button className="btn btn-danger contact-form__button">SALVAR</button>
            <Link className="btn btn-warning contact-form__button cancel" to="/">CANCELAR</Link>
        </form>
    </div>

);

export default RegisterPage;