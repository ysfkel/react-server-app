import React from 'react';
import {Link } from 'react-router';
import 
import './list-item.component.scss';

const ListItem=({item})=>{

        return(
              <Link to="{details}">
                <div className="list-item">
                <div className="image-preview">
                    <img src={item.url} alt=""/>
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