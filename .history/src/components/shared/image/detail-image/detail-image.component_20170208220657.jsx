import React from 'react';

const DetailImage=({url})=>{

          return(
              <div className="item-details-image ">
                   <img src={url} alt=""/>
              </div>
             
          );
      

}

export default DetailImage;