import React from 'react';

import AutoDescriptionForm from './auto-description/auto-description.component.jsx';
import AutoDetailsForm from './auto-details/auto-details.component.jsx';
import AutoDetailsFormMore from './auto-details-more/auto-details-more.component.jsx';



export default class AutoForm extends React.Component{


    constructor(){
      super();
    }

    render(){
        return(
            <div>
        
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
<<<<<<< HEAD

     
=======
>>>>>>> 710d2d300e158eb3557f0857428846e4a6194bc4
}