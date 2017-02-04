import React from 'react';
import axios from 'axios';


export default class Listing extends React.Component{

     componentDidMount () {
         let data=axios.get('http://localhost:5000/autos')
         data.then((d)=>{
             console.log('data',d)
         })
     }
      render(){
          return(
              <div>
                  <header>
                      <h1>Home page</h1>
                  </header>
                  <div>

                  </div>
              </div>
          );
      }

}