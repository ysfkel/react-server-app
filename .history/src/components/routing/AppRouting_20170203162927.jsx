import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from ''
export default class AppRoutes extends React.Component {

    render() {
        return ( 
            <Router history={browserHistory}>
                <Route path="/" component={App}>

                 </Route>   
            </Router>
        );
    }

}