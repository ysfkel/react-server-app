import React from 'react';
import TextField from 'material-ui/TextField';
//import './auto-description.component.scss';

export default class AutoDescriptionForm extends React.Component{
        
        constructor(){
           super();
        }

        handle

        render(){
            return(
                <div>
                    <div>
                        <TextField className="gt-form-field" hintText="e.g Audi R8 for sale*" floatingLabelText="Ad Title*"  ></TextField>
                    </div>
                    <div>
                         <TextField hintText="" floatingLabelText="Phone No*" ></TextField>
                    </div>
                    <div>
                        <TextField
                          hintText="Describe your car here"
                          floatingLabelText="Description"
                          multiLine={true}></TextField>
                    </div>
                </div>
            );
        }
} 