import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from '../pages/app.jsx'
import Home from '../home/home.component.jsx';
import Autos from '../listing/autos/list/autos.list.component.jsx';
import Property from '../listing/property/list/property-list.component.jsx';
import PropertyDetails from '../property/details/property-details.component.jsx';
import ListItemDetails from '../listing/shared/list-item/list-item.component.jsx';
import AutoDetails from '../../components/listing/autos/details/auto-details.component.jsx';


const routes=(
              <Route path="/" component={App}>
                  <IndexRoute component={Home}/>
                  <Route path="home" component={Home}/>
                  <Route path="autos" component={Autos}/>
                  <Route path="auto/:id" component={AutoDetails} />
                  <Route path="property" component={Property}/>
                  <Route path="property/:id" component={PropertyDetails}></Route>
              </Route>  
);

export default routes;