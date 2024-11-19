import { useState, MouseEvent, KeyboardEvent } from 'react';
import { AppBar, MenuItem, Toolbar, styled, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, ListItemIcon, Divider, Typography, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
    if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: isMobile ? 'space-between' : 'space-evenly',
  }));

  const fonteMenu = "1.2rem";

  const menuItems = [
    { text: 'Sobre Mim', href: '#about', icon: <InfoIcon /> },
    { text: 'Skills', href: '#skills', icon: <BuildIcon /> },
    { text: 'Meus Projetos', href: '#projects', icon: <FolderIcon /> },
  ];

  return (
    <>
      <AppBar position="relative">
        <StyledToolbar>
          {!isMobile && menuItems.map((item) => (
            <MenuItem key={item.text} sx={{ fontSize: fonteMenu }} component="a" href={item.href}>
              {item.text}
            </MenuItem>
          ))}
          {isMobile && (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </StyledToolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" textAlign="center">
              Menu
            </Typography>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component="a" href={item.href} onClick={toggleDrawer(false)} sx={{ '&:hover': { backgroundColor: theme.palette.primary.light } }}>
                <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
