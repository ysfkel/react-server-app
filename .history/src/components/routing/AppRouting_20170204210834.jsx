import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from '../pages/app.jsx'
import Home from '../home/home.component.jsx';
import Autos from '../listing/autos/list/autos.list.component.jsx';
import ListItemDetails from '../listing/shared/list-item/list-item.component.jsx';
import AutoDetails from '../../'
export default class AppRoutes extends React.Component {

    render() {
        return ( 
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                  <IndexRoute component={Home}/>
                  <Route path="home" component={Home}/>
                  <Route path="autos" component={Autos}/>
                  <Route path="auto:/id" component={ListItem} />
                </Route>   
            </Router>
        );
    }

}