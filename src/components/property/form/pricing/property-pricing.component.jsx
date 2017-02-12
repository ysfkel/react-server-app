import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import DatePicker from 'material-ui/DatePicker';

export default class PropertyPricing extends Component{

   
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
                            hintText="" floatingLabelText="Developer" />
                    </div>
                      <div>
                        <TextField 
                            className="gt-form-field"
                            hintText="" floatingLabelText="Phone number*" />
                    </div>
                    <div>
                        <div>
                            <DatePicker   className="gt-form-field" floatingLabelText="Ready by" hintText="mm/dd/yyyy" />
                        </div>
                    </div>
               
                  <div>
                    <TextField 
                        className="gt-form-field"
                         hintText="" floatingLabelText="Annual Fee" ></TextField>
                    </div>
                    <div>
                        <SelectField floatingLabelText="Number of checques"
                           className="gt-form-field"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="1"/>
                           <MenuItem value={2}  primaryText="2"/>
                     </SelectField>
                    </div>

                 
                      <div>
                    <TextField 
                        className="gt-form-field"
                         hintText="" floatingLabelText="Price" ></TextField>
                    </div>

                    
            </div>
        );
    }

}