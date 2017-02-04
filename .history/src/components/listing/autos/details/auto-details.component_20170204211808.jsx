import React from 'react';
import axios from 'react-router'
 

export default class  AutoDetails extends React.Component{

       componentDidMount() {
            console.log( )
           let id=this.props.params.id;


       }
       
       render(){
            return(
                <h1>Auto details</h1>
            );
       }
}


