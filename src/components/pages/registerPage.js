import React from 'react';

const RegisterPage = () => (
    <div className="container contact-container">
        <h1>Cadastro</h1>
        <form className="form-group contact-form">
            <input placeholder="Nome" className="form-control contact-form__input" type="text" /><br />
            <input placeholder="E-mail" className="form-control" type="text" /><br />
            <input placeholder="E-mail" className="form-control" type="text" /><br />
            <input placeholder="E-mail" className="form-control" type="text" /><br />
            <input placeholder="E-mail" className="form-control" type="text" /><br />
            <button className="btn btn-danger contact-form__button">SALVAR</button>
        </form>
    </div>
);

export default RegisterPage;