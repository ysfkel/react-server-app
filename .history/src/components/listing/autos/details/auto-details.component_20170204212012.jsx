import React from 'react';
import axios from 'react-router';
 

export default class  AutoDetails extends React.Component{

       componentDidMount() {
           let id=this.props.params.id;
           let promise=axios.get(`http://localhost:5000/autos/${id}`);
           promise
           .then((auto)=>{
               this.
           })
       }
       
       render(){
            return(
                <h1>Auto details</h1>
            );
       }
}


