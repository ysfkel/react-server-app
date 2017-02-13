import React, { Component } from 'react';

import SelectProperty from '../select-property/select-property.component.jsx';
import PropertyAddress from '../property-address/property-address.component.jsx';
import PropertyDetails from '../property-details/property-details.component.jsx';
import PropertyPricing from '../pricing/property-pricing.component.jsx';


export default class EditProperty extends Component{
   
     constructor(){
         super();
     }


     render(){
         return(
             <div className="user-ad-edit-form">
                 <div>
                    <SelectProperty/>
                 </div>
                  <div>
                      <PropertyAddress/>
                 </div>
                 <div>
                        <PropertyDetails/>
                 </div>
                 <div>
                         <PropertyPricing/>
                 </div>
             </div>
         );
     }

}