import React, {Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class CallButton extends Component{

     constructor(props){
         super(props);
         this.state={isToggleOn:false};
         this.handleClick=this.handleClick.bind(this);
     }

     handleClick(){
         this.setState(prevState=>({

             isToggleOn:!prevState.isToggleOn

         }))
     }

     render(){
         return(
        

             <FlatButton   primary={true} onTouchTap={this.handleClick}>
                     {
                     this.state.isToggleOn?'xx xx ':'CALL US'
                 }
             </FlatButton>
         );
     }

}


