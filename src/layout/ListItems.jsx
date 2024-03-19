import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <NavLink to="/students">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
