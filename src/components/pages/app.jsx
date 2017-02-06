import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component{
      render(){
          return(
              <div className="container app-container">
                  <Link to={"/home"}>home</Link>
                  <Link to={"/autos"}>Autos</Link>
                  <Link to={"/property"}>Property</Link>
                  <Link to={"/jobs"}>Jobs</Link>
                  <Link to={"/place-car-ad"}>Place Ad</Link>
                 {this.props.children || "This is the default content"}
              </div>
          )
      }
} 