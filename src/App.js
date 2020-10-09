import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import pages from './pages';
import Header from './components/Header';

const App = () => {

    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={pages[0].component} />
                    {pages.map((page, index) => (
                        <Route key={index} path={page.path} exact component={page.component} />
                    ))}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
