import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

export default class AutoDetailsForm extends React.Component{

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
                         <SelectField floatingLabelText="Make*"
                            value={this.state.value} onChange={this.handleChange}>
                           <MenuItem value={1} primaryText="Ford"/>
                           <MenuItem value={2}  primaryText="Mercedez"/>
                         </SelectField>
                    </div>
                     <div>
                           <SelectField floatingLabelText="Model*" value={this.state.value} onChange={this.handleChange}>
                              <MenuItem value={1} primaryText="model 1"/>
                              <MenuItem value={2}  primaryText="Model 2"/>
                         </SelectField>
                    </div>
                    <div>
                           <SelectField floatingLabelText="Trim*" value={this.state.value} onChange={this.handleChange}>
                              <MenuItem value={1} primaryText="trim 1"/>
                              <MenuItem value={2}  primaryText="trim 2"/>
                         </SelectField>
                    </div>
                    <div>
                         <SelectField floatingLabelText="Year*" value={this.state.value} onChange={this.handleChange}>
                              <MenuItem value={1} primaryText="2000"/>
                              <MenuItem value={2}  primaryText="2007"/>
                         </SelectField>
                    </div>
                    <div>
                          <SelectField floatingLabelText="Kilometers*" value={this.state.value} onChange={this.handleChange}>
                              <MenuItem value={1} primaryText="1000km"/>
                              <MenuItem value={2}  primaryText="2000km"/>
                         </SelectField>
                    </div>
                     <div>
                           <SelectField floatingLabelText="Body Type*" value={this.state.value} onChange={this.handleChange}>
                              <MenuItem value={1} primaryText="body type 1"/>
                              <MenuItem value={2}  primaryText="body type 2"/>
                         </SelectField>
                    </div>
                     <div>
                          <SelectField floatingLabelText="Engine size*" value={this.state.value} onChange={this.handleChange}>
                              <MenuItem value={1} primaryText="engine size 1"/>
                              <MenuItem value={2}  primaryText="engine size 2"/>
                         </SelectField>
                    </div>
                    <div>
                           <TextField  floatingLabelText="Price*"  ></TextField>
                    </div>

              </div>
          );
      }

}