import React from 'react';

import AutoDescriptionForm from './auto-description/auto-description.component.jsx';
import AutoDetailsForm from './auto-details/auto-details.component.jsx';
import AutoDetailsFormMore from './auto-details-more/auto-details-more.component.jsx';
import './auto-form.component.'


export default class AutoForm extends React.Component{


    constructor(){
      super();
    }

    render(){
        return(
            <div className="gt-form-container">
        
                <div>
                  <AutoDescriptionForm></AutoDescriptionForm>
                </div>
                <div>
                    <AutoDetailsForm></AutoDetailsForm>
                </div>
                <div>
                    <AutoDetailsFormMore></AutoDetailsFormMore>

                </div>
            </div>
        );
    }

}