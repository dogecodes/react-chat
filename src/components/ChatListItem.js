import React from 'react';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import titleInitials from '../utils/title-initials';

const styles = theme => ({
  // ...
});

const ChatListItem = ({ classes, title }) => (
  <ListItem button>
    <Avatar>{titleInitials(title)}</Avatar>
    <ListItemText primary={title}/>
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
