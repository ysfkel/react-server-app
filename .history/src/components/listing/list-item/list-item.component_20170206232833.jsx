import React from 'react';
import Thumbnail from '../../shared/image/thumbnail/thumbnail.component.jsx';
import './list-item.component.scss';

const ListItem=({item})=>{

        return(
              <div  className="list-item">
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
              </div>
        );

}

export default ListItem;