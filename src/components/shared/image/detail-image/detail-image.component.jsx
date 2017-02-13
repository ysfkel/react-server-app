import React from 'react';

const DetailImage=({url})=>{
    console.log('uuu',url)

          return(
                   <img className="item-details-image" src={url} alt=""/>             
          );
    
}

export default DetailImage;