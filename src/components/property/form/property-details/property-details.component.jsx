import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';


export default class PropertyDetails extends Component{

   
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state={
            value:1
        }
    }


     handleChange(event,index,value){
         this.setState({
             value:value
         });
     }


    render(){
        return(
            <div>
                   <div>
                            <SelectField floatingLabelText="Bedroom*"
                           className="gt-form-field"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="1"/>
                           <MenuItem value={2}  primaryText="2"/>
                     </SelectField>
                    </div>
                      <div>
                     <SelectField floatingLabelText="Bathroom*"
                           className="gt-form-field"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="1"/>
                           <MenuItem value={2}  primaryText="2"/>
                     </SelectField>
                    </div>
                <div>
                    <TextField 
                        className="gt-form-field"
                         hintText="" floatingLabelText="Size/Sqft*" ></TextField>
                </div>
                  <div>
                           <TextField
                          className="gt-form-field"
                          hintText="Describe your car here"
                          floatingLabelText="Description"
                          multiLine={true}></TextField>
                    
                    </div>
                    <div>
                             <TextField 
                        className="gt-form-field"
                         hintText="" floatingLabelText="Reference number" ></TextField>
               
                    </div>

                    
            </div>
        );
    }

}