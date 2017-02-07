import React from 'react';

import AutoDescriptionForm from './auto-description/auto-description.component.jsx';
import AutoDetailsForm from './auto-details/auto-details.component.jsx';
import AutoDetailsFormMore from './auto-details-more/auto-details-more.component.jsx';
import ExecutionEnvironment from 'exenv';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import css from './auto-form.component.scss';


 class AutoForm extends React.Component{


    constructor(){
      super();
    }

    componentDidMount(){
         var Deck=require('react-slide-deck')
           console.log('can use DOM----',Deck);
    }

    render(){
         if(ExecutionEnvironment.canUseDOM){
            var Deck=require('react-slide-deck')
           console.log('can use DOM',Deck);
        }
        else{
            console.log('cannot use dom')
        }
        return(
            <div>
        
                <div  >
                  <AutoDescriptionForm></AutoDescriptionForm>
                </div>
                <div  >
                    <AutoDetailsForm></AutoDetailsForm>
                </div>
                <div  >
                    <AutoDetailsFormMore></AutoDetailsFormMore>

                </div>
            </div>
        );
    }

}

export default withStyles(css)(AutoForm);   