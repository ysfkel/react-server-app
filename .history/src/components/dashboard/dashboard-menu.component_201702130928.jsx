import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import List from 'material-ui/svg-icons/action/list';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Settings from 'material-ui/svg-icons/action/settings';
//
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';


const DashBoardMenu=()=>{
     
       return(
           <div>
                 <Drawer width={300} openSecondary={false} open={true}  >
                    <AppBar title={<Link to="/autos">GetThat</Link>} />
                    
                      <Menu>
                           
                            <MenuItem primaryText="My Profile"   leftIcon={<AccountCircle />} />
                         
                               <MenuItem primaryText="My Properties" 
                             containerElement={<Link to="/my-properties" />} leftIcon={<List />} />
                          
                            <MenuItem primaryText="My Favorites" leftIcon={<Favorite />} />
                        
                            <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                            <MenuItem primaryText="My Saved Searched" leftIcon={<Download />} />
                            <MenuItem primaryText="Settings" leftIcon={<Settings />} />
                        
                    
                        </Menu>
                    </Drawer>

           </div>
       );
}

export default DashBoardMenu;