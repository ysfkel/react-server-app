import React, { Component } from 'react';
import DashBoardMenu from './dashboard-menu.component.jsx';

export default class DashBoard extends Component{

    constructor(){
        super();

    }



    render(){
        return(
            <div className="dashboard-container">
              <div className="dashboard-menu-container">
                   <DashBoardMenu/>
              </div>
              <div className="dashboard-content-container">
                          {this.props.children || ""}
              </div>
            </div>
        );
    }

}