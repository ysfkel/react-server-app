import React from 'react';
import Li
export default class App extends React.Component{
      render(){
          return(
              <div className="app-container">
                 {this.props.children || "This is the default content"}
              </div>
          )
      }
}