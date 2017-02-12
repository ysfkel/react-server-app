import React,{ Component } from 'react';
import PropertyFormConnector from './form-connector/property-form-connector.component.jsx';



export default class PropertyForm extends Component{


    render(){
        return(
            <div>
                <PropertyFormConnector/>
            </div>
        );
    }


}