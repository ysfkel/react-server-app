import React from 'react';
import Thumbnail from '../image/thumbnail/thumbnail.component.jsx';

//import './list-item.component.scss';

const ListItem=({item})=>{

        return(
              <div  className=" card">

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
              </div>
        );

}

export default ListItem;