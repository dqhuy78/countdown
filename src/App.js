import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';

const App = () => {

    return (
        <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={routes[0].component} />
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact component={route.component} />
                ))}
            </Switch>
        </Router>
    </div>
    );
}

export default App;
