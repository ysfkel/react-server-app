import React from 'react';
import axios from 'axios';
import DetailImage from '../../listing/image/detail-image/detail-image.component.jsx';
 

export default class  AutoDetails extends React.Component{

       constructor(){
           super();
           this.state={
               data:{}
           }
       }

       componentDidMount() {
           let id=this.props.params.id;
           let promise=axios.get(`http://localhost:5000/autos/${id}`);
           promise
           .then((auto)=>{
           
               this.setState({
                   data:auto.data
               });
           })
       }


       
       render(){
           
         
            return(
                <div>
                    <h1>Auto  details </h1>
                       <DetailImage url={this.state.data.url}/>
                 
                </div>
            );
       }
}


