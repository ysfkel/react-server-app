import React from 'react';

import Listing from '../../shared/listing/listing.component.jsx';

import axios from 'axios';
import Auto from '../item/auto-list-item.component.jsx';




export default class AutosList extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

     static fetchData() {
         return {
             name:'yusuf kelo'
         }
     } // will be used for server side rendering

     componentWillMount () {
         let data=axios.get('http://localhost:5000/autos')
         data.then((res)=>{
   
             this.setState({
                   data:res.data
             });
         })
     }

     componentDidMount () {
        //  let data=axios.get('http://localhost:5000/autos')
        //  data.then((res)=>{
   
        //      this.setState({
        //            data:res.data
        //      });
        //  })
     }
      render(){
       //   console.log('ExecutionEnvironment',ExecutionEnvironment)
           const { data } = this.state // => const data = this.state.data
        //   console.log('Pa',Deck)

        
               return(

              <div className="list-container">
                  <header>
                      <h1>Autos page</h1>
                  </header>
                  <div>
                     {
                       this.state.data.map((item,i)=><Auto key={i} auto={item}/>)
                     }
       
                  </div>
                   <script dangerouslySetInnerHTML={ { __html: 'window.PROPS=' + JSON.stringify(data) } }/>
              </div>
          
               )
       
          // }
        
      }

}


