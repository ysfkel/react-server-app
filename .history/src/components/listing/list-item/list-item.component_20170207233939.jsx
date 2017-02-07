import React from 'react';
import Thumbnail from '../../shared/image/thumbnail/thumbnail.component.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//import styles from './list-item.component.scss';

const ListItem=({item})=>{

        return(
     <div c>
                           <Card>
    {/*<CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />*/}
    <CardMedia
      overlay={<CardTitle title={item.title} subtitle="Overlay subtitle" />}
    >
   
          <Thumbnail url={item.url} alt=""/>
    </CardMedia>
    <CardTitle title={item.title} subtitle="Card subtitle" />
    <CardText>
     {item.description}
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
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