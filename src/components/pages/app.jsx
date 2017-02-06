import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


export default class App extends React.Component{
      render(){
          return(
              <MuiThemeProvider>
              <div className="container app-container">
                    <RaisedButton label="Default" />
                  <Link to={"/home"}>home</Link>
                  <Link to={"/autos"}>Autos</Link>
                  <Link to={"/property"}>Property</Link>
                  <Link to={"/jobs"}>Jobs</Link>

                  <Link to={"/place-auto-ad"}>Place Ad</Link>

                 {this.props.children || "This is the default content"}
              </div>
              </MuiThemeProvider>
          )
      }
} 