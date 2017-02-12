import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';


export default class PropertyAddress extends Component{

   
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
                        <TextField 
                            className="gt-form-field"
                            hintText="" floatingLabelText="Ad Title*" />
                    </div>
                      <div>
                        <TextField 
                            className="gt-form-field"
                            hintText="" floatingLabelText="Phone number*" />
                    </div>
                <div>
                    <SelectField floatingLabelText="City*"
                           className="gt-form-field"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="body condition 1"/>
                           <MenuItem value={2}  primaryText="body condition 2"/>
                     </SelectField>
                </div>
                  <div>
                    <TextField 
                        className="gt-form-field"
                         hintText="" floatingLabelText="Community" ></TextField>
                    </div>

                      <div>
                    <TextField 
                        className="gt-form-field"
                         hintText="" floatingLabelText="Sub community" ></TextField>
                    </div>
                      <div>
                    <TextField 
                        className="gt-form-field"
                         hintText="" floatingLabelText="Property name" ></TextField>
                    </div>

                    
            </div>
        );
    }

}