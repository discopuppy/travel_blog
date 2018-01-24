import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from './components/Header';
import HomePage from './components/HomePage';
//import ArticleCard from './components/ArticleCard';
//import CardGroup from './components/CardGroup';
import Footer from './components/Footer';
import LoadingPage from './components/LoadingPage';
import AppRouter from './routers/AppRouter';

/*const jsx = (
    <div>
        <Header />
        <hr className="main__hr" />
        <HomePage />
        <Footer />
    </div>
);*/

const jsx = (
    <AppRouter />
);

/*let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) { // if hasRendered is not true
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}; // makes sure app only renders a single time


ReactDOM.render(<LoadingPage />, document.getElementById('app'));

setTimeout(function(){ renderApp(); }, 3000); */





ReactDOM.render(jsx, document.getElementById('app'));