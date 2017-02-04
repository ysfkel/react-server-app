import React from 'react';
import {Link } from 'react-router';
import Thumbnail from '../../image/thumbnail/thumbnail.component.jsx';

import './list-item.component.scss';

const ListItem=({item})=>{

        return(
              <Link to="details" params={{item.id}>
                <div className="list-item">
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
              </Link>
        );

}

export default ListItem;