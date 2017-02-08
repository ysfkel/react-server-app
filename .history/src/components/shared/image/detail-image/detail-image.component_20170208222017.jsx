import React from 'react';

const DetailImage=({url})=>{

          return(
              <div >
                   <img className="item-details-image" src={url} alt=""/>
              </div>
             
          );
    
}

export default DetailImage;