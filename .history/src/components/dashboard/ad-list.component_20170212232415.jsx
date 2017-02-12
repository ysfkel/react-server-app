import React from 'react';

import Listing from '../../shared/listing/listing.component.jsx';

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
                       this.state.data.map((item,i)=><div>my ad</div>)
                     }
       
                  </div>
              </div>
          
               )
      }

}


