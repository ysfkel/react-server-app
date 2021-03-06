import React from 'react';
import Listing from '../../shared/listing.component.jsx';
import axios from 'axios';
import Auto from '../item/auto-list-item.component.jsx';
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
          if(this.state.data.length<1){
              return(<div></div>)
          }
          return(
              <div>
                  <header>
                      <h1>Autos page</h1>
                  </header>
                  <div>
                     {
                       this.state.data.map((item,i)=><Auto key={i} auto={item}/>)
                     }
                     {/*<Listing list={this.state.data} />*/}
                  </div>
              </div>
          );
      }

}