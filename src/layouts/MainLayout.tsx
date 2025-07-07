import { ChevronLeft, Logout } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Suspense, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import type { MainLayoutProps } from './type';
import { AppBar, Drawer, DrawerHeader, drawerWidth } from './utils/layoutUtils';
import { menuItems } from './utils/menuItems';

export const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
}) => {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isProcesosRoute = location.pathname === '/procesos';
  const hideSidebar = location.pathname === '/';

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{ bgcolor: '#222363', height: 63 }}
      >
        <Toolbar>
          {!hideSidebar && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              {!open ? <MenuIcon /> : <ChevronLeft />}
            </IconButton>
          )}
          <Typography marginLeft={1} variant="h6">
            Conectar
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="right">
              <Typography variant="body2" component="p">
                Alexis Joel Carreras
              </Typography>
              <Typography variant="caption" component="p">
                ajcarreras@cat-technologies.com
              </Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#bdbdbd' }}>AC</Avatar>
          </Stack>
        </Toolbar>
      </AppBar>

      {!hideSidebar && (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader />
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  display: 'block',
                  width: open ? '90%' : '75%',
                  margin: 'auto',
                  mb: 1,
                  mt: 1,
                  justifyContent: open ? 'initial' : 'center',
                }}
              >
                <Tooltip title={!open ? item.text : ''} placement="right">
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: 'none',
                      color: '#474747',
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 1.5,
                        borderRadius: '10px',
                        width: '100%',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: '0%',
                          height: '3px',
                          bottom: '0px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: theme.palette.primary.dark,
                          transition: 'width 0.2s ease',
                        },
                        '&:hover::after': {
                          width: '90%',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(34, 35, 99, 0.08)',
                          '& .MuiListItemIcon-root, & .MuiListItemText-primary':
                            {
                              color: theme.palette.primary.dark,
                            },
                        },
                        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                          color:
                            location.pathname === item.path
                              ? theme.palette.primary.main
                              : 'inherit',
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 1 : 'auto',
                          justifyContent: 'center',
                          color:
                            location.pathname === item.path
                              ? theme.palette.primary.main
                              : 'inherit',
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            fontSize="0.8125rem"
                            color={
                              location.pathname === item.path
                                ? theme.palette.primary.main
                                : 'inherit'
                            }
                          >
                            {item.text}
                          </Typography>
                        }
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </Link>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 1,
            }}
          >
            <ListItem
              disablePadding
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {!open && (
                <Tooltip title="Cerrar Sesión" placement="right">
                  <IconButton
                    aria-label="Cerrar Sesión"
                    sx={{
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      border: `1px solid`,
                      borderRadius: 1,
                      p: 1,
                      boxShadow: 3,
                      mb: 1,
                    }}
                  >
                    <Logout />
                  </IconButton>
                </Tooltip>
              )}
              {open && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Logout />}
                  sx={{
                    width: '90%',
                    borderRadius: 8,
                    boxShadow: theme.shadows[1],
                    textTransform: 'none',
                    mb: 1,
                    mx: 'auto',
                    p: '8px',
                  }}
                >
                  Cerrar Sesión
                </Button>
              )}
            </ListItem>
            {/* {!open ? (
            <Typography fontSize="0.7rem">1.0.0</Typography>
          ) : (
            <Typography fontSize="0.7rem">Versión 1.0.0</Typography>
          )} */}
          </Box>
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: !hideSidebar ? 3 : 0,
          ml: hideSidebar
            ? 0
            : open
              ? `${drawerWidth}px`
              : `calc(${theme.spacing(7)} + 1px)`,
          mt: '63px',
          background: isProcesosRoute
            ? '#FFFF'
            : theme.palette.background.default,
          transition: theme.transitions.create(['margin-left', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Box>
    </>
  );
};
