import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { MENU } from '../constants/settings';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../redux/store';
import { NavLink, useLocation } from 'react-router-dom';
import { setPath } from '../redux/slices/sidebar.slice';
import { Typography } from '@mui/material';
import { useEffect } from 'react';

function SideMenu() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { open, selectedMenu } = useSelector((state: IRootState) => state.sidebar)
  const path = selectedMenu?.path;
  useEffect(() => {
    if (path !== pathname) {
      dispatch(setPath(pathname));
    }
  }, [dispatch, path, pathname])

  return (
    <List>
      {MENU.map((item) => {
        const { name, path: redirectionPath, icon: Icon } = item;

        return <ListItem
          key={name}
          disablePadding
          onClick={() => dispatch(setPath(path))}
          sx={{
            display: 'block',
            backgroundColor: path === redirectionPath ? '#e3f1ff' : '#fff'
          }}
        >
          <NavLink
            to={redirectionPath}
            style={{ textDecoration: 'none' }} >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: path === redirectionPath ? '#1976d2' : 'rgba(0, 0, 0, 0.54)'
                }}
              >
                <Icon />
              </ListItemIcon>

              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    style={{
                      color: path === redirectionPath ? '#1976d2' : 'rgba(0, 0, 0, 0.54)',
                      fontWeight: path === redirectionPath ? '700' : 'unset',
                    }}>
                    {name}
                  </Typography>
                }
                sx={{
                  opacity: open ? 1 : 0,
                }} />

            </ListItemButton>
          </NavLink>
        </ListItem>
      })}
    </List>
  )
}

export default SideMenu