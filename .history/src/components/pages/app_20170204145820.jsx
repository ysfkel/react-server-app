import React from 'react';
import { Link }
export default class App extends React.Component{
      render(){
          return(
              <div className="app-container">
                 {this.props.children || "This is the default content"}
              </div>
          )
      }
}