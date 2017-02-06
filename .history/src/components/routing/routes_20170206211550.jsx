import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from '../pages/app.jsx'
import Home from '../home/home.component.jsx';
import Autos from '../autos/list/autos.list.component.jsx';
import Property from '../property/list/property-list.component.jsx';
import PropertyDetails from '../property/details/property-details.component.jsx';

import ListItemDetails from '../shared/list-item/list-item.component.jsx';
import AutoDetails from '../autos/details/auto-details.component.jsx';
import AutoDescriptionForm from '../autos/form/auto-form.component.jsx';
import AuroFormDeck from '../autos/form/auto-form-deck.component.jsx';
>>>>>>> 710d2d300e158eb3557f0857428846e4a6194bc4


const routes=(
              <Route path="/" component={App}>
                  <IndexRoute component={Home}/>
                  <Route path="home" component={Home}/>
                  <Route path="autos" component={Autos}/>
                  <Route path="auto/:id" component={AutoDetails} />
                  <Route path="property" component={Property}/>
                  <Route path="property/:id" component={PropertyDetails}></Route>
<<<<<<< HEAD
                  <Route path="place-car-ad" component={AutoForm}/>
=======
                  <Route path="/place-auto-ad" component={AutoDescriptionForm}></Route>
>>>>>>> 710d2d300e158eb3557f0857428846e4a6194bc4
              </Route>  
);

export default routes;