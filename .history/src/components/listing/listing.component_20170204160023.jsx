import React from 'react';
import axios from 'axios';



export default class Listing extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
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