import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


export default class AutoDetailsMore extends React.Component{
   
  constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state={
            value:1
        }
    }

       handleChange(event,index,value){
         console.log(event,index,value)
         this.setState({
             value:value
         });
         console.log(event,index,value)
     }


    render(){
        return(
            <div>
                <div>
                    <SelectField floatingLabelText="Body Condition*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="body condition 1"/>
                           <MenuItem value={2}  primaryText="body condition 2"/>
                     </SelectField>
                </div>
                 <div>
                     <SelectField floatingLabelText="Mechanical Condition*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="mechanical condition 1"/>
                           <MenuItem value={2}  primaryText="mechanical condition 2"/>
                     </SelectField>
                </div>
                 <div>
                     <SelectField floatingLabelText="Mechanical Condition*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="color"/>
                           <MenuItem value={2}  primaryText="color"/>
                     </SelectField>
                </div>
                 <div>
                      <SelectField floatingLabelText="Doors*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="2"/>
                           <MenuItem value={2}  primaryText="3"/>
                     </SelectField>
                </div>
                 <div>
                    <SelectField floatingLabelText="Cylinders*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="2"/>
                           <MenuItem value={2}  primaryText="3"/>
                     </SelectField>
                </div>
                 <div>
                     <SelectField floatingLabelText="Horse Power*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="2hp"/>
                           <MenuItem value={2}  primaryText="3hp"/>
                     </SelectField>
                </div>
                 <div>
                    <SelectField floatingLabelText="Transmission*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="tp1"/>
                           <MenuItem value={2}  primaryText="tp2"/>
                     </SelectField>
                </div>
                 <div>
                    <SelectField floatingLabelText="Fuel Type*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="ft 1"/>
                           <MenuItem value={2}  primaryText="gt 2"/>
                     </SelectField>
                </div>
                 <div>
                    <SelectField floatingLabelText="Regional Specs*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="regional specs"/>
                           <MenuItem value={2}  primaryText="regional specs"/>
                     </SelectField>
                </div>
                 <div>
                           <SelectField floatingLabelText="Warranty*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="warrant 1"/>
                           <MenuItem value={2}  primaryText="warranty 2"/>
                     </SelectField>
                </div>
            </div>
        );
    }


}