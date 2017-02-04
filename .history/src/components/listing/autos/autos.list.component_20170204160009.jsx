import React from 'react';
import Listing from '../listing.component';

export default class AutosList extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

     componentDidMount () {
         let data=axios.get('http://localhost:5000/autos')
         data.then((res)=>{
   
             this.setState({
                   data:res.data
             });
         })
     }
      render(){
          console.log(this.state)
          return(
              <div>
                  <header>
                      <h1>Autos page</h1>
                  </header>
                  <div>
     <Listing/>
                  </div>
              </div>
          );
      }

}