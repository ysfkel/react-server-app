import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from '../pages/app.jsx'
import Home from '../home/home.component.jsx';
import Autos from '../a/listing.component.jsx';

export default class AppRoutes extends React.Component {

    render() {
        return ( 
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                  <Route path="home" component={Home}/>
                  <Route path="autos" component={Listing}/>
                </Route>   
            </Router>
        );
    }

}