import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component{
      render(){
          return(
              <div className="app-container">
                  <Link to></Link>
                 {this.props.children || "This is the default content"}
              </div>
          )
      }
}