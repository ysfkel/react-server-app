import React,{ Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class EmailForm extends Component{

    constructor(){
        super();
    }


    render(){

        return(
            <div>
                    <div>
                        <TextField
                        className="gt-form-field"
                        floatingLabelText="Your name"
                        />
                    </div>

                    <div>
                        <TextField
                        className="gt-form-field"
                        hintText="example@gmail.com"
                        floatingLabelText="Your email"
                        />
                    </div>
                    <div>
                        <TextField
                        className="gt-form-field"
                            hintText="Type your message here"
                            floatingLabelText="Message"
                            multiLine={true}
                            rows={7}
                            rowsMax={7}
                            />
                    </div>
                    <div>

                       {/*<RaisedButton label="Primary" primary={true}  />*/}
                    

                    </div>

            </div>
        );
    }
}