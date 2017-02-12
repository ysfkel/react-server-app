
import React from 'react';
import Thumbnail from '../../shared/image/thumbnail/thumbnail.component.jsx';
import ListItemTitle from '../../listing/list-item/list-item-title.jsx';
import Price from '../../listing/list-item/list-item-price.jsx';



const EmailModalItemInfo=({item})=>{
    return(
        <div>
            <div className="thumbnail-container-email-modal">
                  <Thumbnail url={item.url}/>
                </div>
                <ListItemTitle data={item.title}/>
                <Price price={item.price}/>
        </div>
    );
}


export default EmailModalItemInfo;