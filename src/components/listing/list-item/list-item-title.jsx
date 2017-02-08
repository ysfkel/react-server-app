import React from 'react';

const ListItemTitle=({data})=>{

    return(
        <div>
            <h2>{data}</h2>
        </div>
    );
}

ListItemTitle.propTypes={
    data:React.PropTypes.string
}

export default ListItemTitle;