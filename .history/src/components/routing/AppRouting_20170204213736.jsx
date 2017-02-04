import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import routes from './routes.jsx';
export default class AppRoutes extends React.Component {

    render() {
        return ( 
            <Router history={browserHistory} routes={routes}>
            </Router>
        );
    }

}