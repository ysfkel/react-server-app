import React, { Component } from 'react';

export default class EditProperty extends Component{
   
     constructor(){
         super();
     }


     render(){
         return(
             <div>
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