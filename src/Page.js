import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import App from './App';
const supportsHistory = 'pushState' in window.history

export default () => (
    <Router forceRefresh={!supportsHistory}>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />        
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)