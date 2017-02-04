import React from 'react';
import axios from 'axios';


export default class Listing extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

     componentDidMount () {
         let data=axios.get('http://localhost:5000/autos')
         data.then((d)=>{
             console.log('data',d)
             this.setState({
                   data:res.dat
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

                  </div>
              </div>
          );
      }

}