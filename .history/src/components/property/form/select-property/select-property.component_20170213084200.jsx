import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

export default class SelectProperty extends Component{

   
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
                    <SelectField floatingLabelText="Looking to rent my*"
                           className="gt-form-field"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="body condition 1"/>
                           <MenuItem value={2}  primaryText="body condition 2"/>
                     </SelectField>
                </div>
                    <div>
                    <SelectField floatingLabelText="Of property type*"
                           className="gt-form-field"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="body condition 1"/>
                           <MenuItem value={2}  primaryText="body condition 2"/>
                     </SelectField>
                </div>
                {
                   if(this.props.showAgreement===true){
                        <div>
                      <Checkbox label="I agree that the information shared is correct and inline with RERA guidelines. I am aware that wrong information could lead to my account being suspended"/>
                       </div>
                    }
                }
            </div>
        );
    }

}