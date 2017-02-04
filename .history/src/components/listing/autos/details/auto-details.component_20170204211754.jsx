import React from 'react';
 

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


