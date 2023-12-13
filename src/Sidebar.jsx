import { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  List,
  CssBaseline,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";
import { FaStopwatch, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "./App";
import { HoverIconButton } from "./components/Components";
const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const theme = useTheme();
  const { open, setOpen } = useContext(AppContext);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
      <Drawer variant='permanent' open={open}>
        <DrawerHeader sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            display='flex'
            sx={{ opacity: open ? 1 : 0, transition: ".5s" }}
            ml='4px'
            fontSize='1.5rem'></Box>
          <HoverIconButton
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              width: "20px",
              height: "20px",
              borderRadius: "10px",
              fontSize: "small",
            }}
            onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? ">" : "<"}
          </HoverIconButton>
        </DrawerHeader>
        <Divider />

        <List sx={{ padding: "10px" }}>
          <ListItem
            className='listHover'
            disablePadding
            sx={{
              display: "block",
            }}>
            <Link
              style={{
                color: "#333",
                textDecoration: "none",
              }}
              to='/'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}>
                <ListItemIcon
                  className='listIcon'
                  sx={{
                    minWidth: 0,
                    fontSize: "1.7rem",
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  <FaUsers />
                </ListItemIcon>
                <ListItemText
                  primary='Users App'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem
            className='listHover'
            disablePadding
            sx={{
              display: "block",
            }}>
            <Link
              style={{
                color: "#333",
                textDecoration: "none",
              }}
              underline='none'
              to='/time'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}>
                <ListItemIcon
                  className='listIcon'
                  sx={{
                    minWidth: 0,
                    fontSize: "1.7rem",
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  <FaStopwatch />
                </ListItemIcon>
                <ListItemText
                  primary='Countdown App'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <DrawerHeader />
    </>
  );
};

export default Sidebar;
