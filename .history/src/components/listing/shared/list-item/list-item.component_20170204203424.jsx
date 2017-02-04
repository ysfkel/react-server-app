import React from 'react';
import {Link } from 'react-router';
import Thumbnail from '../../../shared/image/thumbnail/thumbnail.component.jsx';

import './list-item.component.scss';

export default class  ListItem extends React.Component{

      constructor(){
          this.setState={
              item:{}
          }
      }

      render(){
            return(
              <Link to={'details/'+this.props.item.id}>
                <div className="list-item">
                <div className="image-preview">
                    <Thumbnail url={this.props.item.url} alt=""/>
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
              </Link>
        );
      }

}
