import React from 'react';
import ListItem from '../../listing/list-item/list-item.component.jsx';
import { Link } from 'react-router';

import { GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

 const styles = {
  
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};
const Auto=({auto})=>{

    return(

 
          {/*<img src={tile.img} />*/}
           <Link to={'auto/'+auto.id}>
              <ListItem item={auto}/>
            </Link>
        </GridTile>
  
           

    );

}


export default Auto;