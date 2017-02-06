import React from 'react';
import axios from 'axios';
import DetailImage from '../../listing/image/detail-image/detail-image.component.jsx';


export default class PropertyDetails extends React.Component{

    constructor(){
        super();
        this.state={
            data:{}
        }
    }

    componentWillMount(){
        let id=this.props.params.id;
        let promise=axios.get(`http://localhost:5000/property/${id}`);
        promise
        .then((property)=>{
            this.setState({
                data:property.data
            })
        })
    }
      
      render(){
          return(
           <div>
               <header>
                   <h1>Details</h1>
               </header>
               <div>
                   <DetailImage url={this.state.data.url}/>

               </div>
           </div>
          );
      }
}