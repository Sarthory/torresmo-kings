import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';

// pages
import HomePage from './components/pages/homePage';
import ProductsPage from './components/pages/productsPage';
import ContactsPage from './components/pages/contactsPage';
import MenuPage from './components/pages/menuPage';
import RegisterPage from './components/pages/registerPage';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/products" component={ProductsPage}/>
                    <Route path="/contacts" component={ContactsPage}/>
                    <Route path="/menu" component={MenuPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;