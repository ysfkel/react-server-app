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
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


const DashBoardMenu=()=>{
      const style={
        'box-shadow':'0 -3px 1px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.23)',
           'boxShadow':'0 -3px 1px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.23)',
        'backGround':'red',
           'back-ground':'red',
              backGround:'red',
      }
       return(
           <div>
                 <Drawer width={300} openSecondary={false} open={true}  style={style}>
                    <AppBar title={<Link to="/autos">GetThat</Link>} />
                    
                      <Menu>
                              <MenuItem
          primaryText="Custom: 1.2"
          checked={true}
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem
              primaryText="Show"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Show Level 2" />,
                <MenuItem primaryText="Grid lines" checked={true} />,
                <MenuItem primaryText="Page breaks" insetChildren={true} />,
                <MenuItem primaryText="Rules" checked={true} />,
              ]}
            />,
            <MenuItem primaryText="Grid lines" checked={true} />,
            <MenuItem primaryText="Page breaks" insetChildren={true} />,
            <MenuItem primaryText="Rules" checked={true} />,
          ]}
        />

                            <MenuItem primaryText="My Profile"   leftIcon={<AccountCircle />} />
                            
                             <MenuItem primaryText="My Ads" 
                             containerElement={<Link to="/my-ads" />} leftIcon={<List />} />
                          
                            <MenuItem primaryText="My Favorites" leftIcon={<Favorite />} />
                        
                            <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                            <MenuItem primaryText="My Saved Searched" leftIcon={<Download />} />
                            <MenuItem primaryText="Settings" leftIcon={<Settings />} />
                        
                    
                        </Menu>
                    </Drawer>
             {/*<Paper>
                <Menu>
                    <MenuItem primaryText="My Profile" leftIcon={<AccountCircle />} />
                    <MenuItem primaryText="My Ads" leftIcon={<List />} />
                    <MenuItem primaryText="My Favorites" leftIcon={<Favorite />} />
                  
                    <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                    <MenuItem primaryText="My Saved Searched" leftIcon={<Download />} />
                     <MenuItem primaryText="Settings" leftIcon={<Settings />} />
                
               
                </Menu>
             </Paper>*/}
           </div>
       );
}

export default DashBoardMenu;