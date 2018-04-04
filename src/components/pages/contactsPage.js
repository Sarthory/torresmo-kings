import React from 'react';

const ContactsPage = () => (
    <div className="container contact-container">
        <h1>Fale Conosco</h1>
        <h4>Sua opinião é muito importante!</h4>
        <form className="form-group contact-form">
            <input placeholder="Nome" className="form-control contact-form__input" type="text"/><br/>
            <input placeholder="E-mail" className="form-control" type="text"/><br/>
            <textarea rows="4" placeholder="Mensagem" className="form-control"/><br/>
            <button className="btn btn-danger contact-form__button">ENVIAR</button>
        </form>
    </div>
);

export default ContactsPage;