import React from 'react';
import axios from 'react-router';
 

export default class  AutoDetails extends React.Component{

       componentDidMount() {
           let id=this.props.params.id;
           let auto=axios.get
       }
       
       render(){
            return(
                <h1>Auto details</h1>
            );
       }
}


