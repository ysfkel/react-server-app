import React from 'react';
import ListItem from '../../listing/list-item/list-item.component.jsx';
import { Link } from 'react-router';

import { GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const Auto=({auto})=>{

    return(

         <GridTile
          key={tile.img}
          title={auto.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          {/*<img src={tile.img} />*/}
           <Link to={'auto/'+auto.id}>
              <ListItem item={auto}/>
            </Link>
        </GridTile>
  
           

    );

}


export default Auto;