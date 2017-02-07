import React from 'react';
import Thumbnail from '../../shared/image/thumbnail/thumbnail.component.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//import styles from './list-item.component.scss';

const ListItem=({item})=>{

        return(
     <div>
         
     </div>
              /*<div  className="card">

                <div className="image-preview">
                    <Thumbnail url={item.url} alt=""/>
                </div>
                 <div className="container item-info">
                       <div>
                           {item.title}
                       </div>
                       <div>
                           <p>
                               {item.description}
                           </p>
                       </div>
                </div>
              </div>*/
              /*<div  className="list-item">
                <div >
                <div className="image-preview">
                    <Thumbnail url={item.url} alt=""/>
                </div>
                    <div className="item-info">
                       <div>
                           {item.title}
                       </div>
                       <div>
                           <p>
                               {item.description}
                           </p>
                       </div>
                </div>

              </div>  
              </div>*/
        );

}

export default ListItem;