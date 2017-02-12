import React, { Component } from 'react';
import DashBoardMenu from './dashboard-menu.component.jsx';

export default class DashBoard extends Component{

    constructor(){
        super();

    }



    render(){
        return(
            <div className="dashboard-container">
              <div>
                   <DashBoardMenu/>
              </div>
              <div>
                  
              </div>
            </div>
        );
    }

}