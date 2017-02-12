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


const DashBoardMenu=()=>{
       return(
           <div>
             <Paper>
                <Menu>
                    <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
                    <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                    <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                    <Divider />
                    <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                    <MenuItem primaryText="Download" leftIcon={<Download />} />
                    <Divider />
                    <MenuItem primaryText="Remove" leftIcon={<Delete />} />
                </Menu>
             </Paper>
           </div>
       );
}

export default DashBoardMenu;