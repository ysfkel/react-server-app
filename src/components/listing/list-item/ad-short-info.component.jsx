import React from 'react';


const AdShrortInfo=({dataCollection})=>{
         
        return(
 
              <div>
              {
                 dataCollection.map((item,i)=><span key={i}>{item}</span>)   
              }
              </div>  
        );

}

AdShrortInfo.propTypes={
    dataCollection:React.PropTypes.array
}

export default AdShrortInfo;