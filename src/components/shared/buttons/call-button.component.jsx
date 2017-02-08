import React, {Component } from 'react';

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
             <button onClick={this.handleClick}>
                 {
                     this.state.isToggleOn?'xx xx ':'CALL'
                 }
             </button>
         );
     }

}


