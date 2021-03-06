import React from 'react';
import TextField from 'material-ui/TextField';

export default class AutoDescriptionForm extends React.Component{
        
        constructor(){
           super();
        }

        render(){
            return(
                <div>
                    <div>
                        <TextField className="styles-overriding-css-example" hintText="e.g Audi R8 for sale*" floatingLabelText="Ad Title*"  ></TextField>
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