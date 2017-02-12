import React from 'react';
import axios from 'axios';
import DetailImage from '../../shared/image/detail-image/detail-image.component.jsx';
import Thumnailslider from '../../shared/image/thumbnail/thumbnail-slider.component.jsx'
import Price from '../../listing/list-item/list-item-price.jsx';
import AdShrortInfo from '../../listing/list-item/ad-short-info.component.jsx';
import ListItemTitle from '../../listing/list-item/list-item-title.jsx';

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

           console.log('this.state.data',this.state)
           
            return(
               <div> 
                    <div className="item-details-image-container">
                        <DetailImage url={this.state.data.url}/>
                    </div>
                    <div className="item-details-info-container">
                         <ListItemTitle data={this.state.data.title}/>
                        <Price price={this.state.data.price}/>
                        <AdShrortInfo dataCollection={[this.state.data.model,this.state.data.mileage]}/>
                        
                    </div>
                    <div className="item-features">

                    </div>
                    <div className="item-description">

                    </div>
               </div>
            );
       }
}


