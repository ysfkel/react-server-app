import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

export default class Badge extends React.Component{

       
          constructor(){
            super();
          }

          

          render(){

                        const iconStyles = {
            marginRight: 24,
                padding:30
            };

              return(
                 
                  <div>
                       <div className="gt-card"> 
                             <div>
                                 <h4>{item.title}</h4>
                             </div>

                        </div>
      
                  </div>
              );

          }

}