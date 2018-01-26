import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import ArticlesPage from '../components/ArticlesPage';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';
import ConstructionPage from '../components/ConstructionPage';

export const history = createHistory();

const AppRouter = () => ( // Client-Side Routing
    <Router history={history}>
        <div>
            <Header history={history}/>
            <hr className="main__hr" />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/articles" component={ArticlesPage} />
                <Route path="/construction"component={ConstructionPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>
        </Router>
);

export default AppRouter;