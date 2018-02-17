import React from 'react';
import MUIAvatar from 'material-ui/Avatar';
import getColor from '../utils/color-from';
import titleInitials from '../utils/title-initials';

const Avatar = ({ colorFrom, children, ...rest }) => (
  <MUIAvatar style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(children)}
  </MUIAvatar>
);

export default Avatar;
