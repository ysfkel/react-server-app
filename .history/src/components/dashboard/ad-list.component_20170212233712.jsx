import React from 'react';
import UserAd from './user-ad.component.jsx';
// import Listing from '../../shared/listing/listing.component.jsx';

import axios from 'axios';

export default class AutosList extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }
     componentWillMount () {
         let data=axios.get('http://localhost:5000/autos')
         data.then((res)=>{
   
             this.setState({
                   data:res.data
             });
         })
     }
      render(){
           const { data } = this.state
        return(

              <div className="list-container">
                  <header>
                      <h1>Autos page</h1>
                  </header>
                  <div>
                     {
                       this.state.data.map((item,i)=><UserAd>my ad</UserAd>)
                     }
       
                  </div>
              </div>
          
               )
      }

}


