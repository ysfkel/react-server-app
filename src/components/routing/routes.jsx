import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from '../pages/app.jsx'
import Home from '../home/home.component.jsx';
import Autos from '../autos/list/autos.list.component.jsx';
import DashBoard from '../dashboard/dashboard.component.jsx';
import Property from '../property/list/property-list.component.jsx';
import PropertyDetails from '../property/details/property-details.component.jsx';

import ListItemDetails from '../shared/list-item/list-item.component.jsx';
import AutoDetails from '../autos/details/auto-details.component.jsx';
import AutoDescriptionForm from '../autos/form/auto-form.component.jsx';
import PropertyForm from '../property/form/property-form.component.jsx';
import SelectAdType from '../ad/select-ad-type.component.jsx';

const routes=(
              <Route path="/" component={App}>
                  <IndexRoute component={Home}/>
                  <Route path="home" component={Home}/>
                  <Route path="autos" component={Autos}/>
                  <Route path="auto/:id" component={AutoDetails} />
                  <Route path="property" component={Property}/>
                  <Route path="property/:id" component={PropertyDetails}></Route>
                  <Route path="user/profile" component={DashBoard}/>
                  <Route path="select-ad-type" component={SelectAdType}/>
                  <Route path="/place-auto-ad" component={AutoDescriptionForm}/>
                  <Route path="/place-auto-property" component={PropertyForm}/>
              </Route>  
);

export default routes;