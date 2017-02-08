import React from 'react';
import axios from 'axios';
import DetailImage from '../../shared/image/detail-image/detail-image.component.jsx';
import Slider from '../../shared/'

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
                <div className="item-details-image">
                    <h1>Auto  details </h1>
                    <Slider/>
                       <DetailImage url={this.state.data.url}/>
                </div>
            );
       }
}


