import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import { useContext, useState } from "react";
import { CiLight, CiSearch } from "react-icons/ci";
import { IoSettings, IoCloseSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";

import {
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
  FormControl,
  OutlinedInput,
  Menu,
  MenuItem,
  Avatar,
  Badge,
  Divider,
  ListItemIcon,
} from "@mui/material";
import localStorageData from "./functions/localStorage";
import debounce from "./functions/debounce";
import { AppContext } from "./App";
import {
  /* MegaMenuProfile, */
  MegaMenuContacts,
  /*  MegaMenuSettings, */
} from "./components/MegaMenu";
import {
  FlexBox,
  FlexBetween,
  HoverIconButton,
  OnlineIndicator,
} from "./components/Components";
const drawerWidth = 200;

const InputBox = styled(OutlinedInput)({
  backgroundColor: "#f0f0f0",
  border: 0,
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#ffffff",
  color: "#333",
  boxShadow: "none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Topbar = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [localData, setLocalData] = useState();
  const { open, setOpen, isDarkMode, setIsDarkMode, setSearchText, getData } =
    useContext(AppContext);
  /*   const [anchorElContacts, setAnchorElContacts] = useState(null);
  const [anchorElSetting, setAnchorElSetting] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
 */
  const [anchorEl, setAnchorEl] = useState({
    search: null,
    contacts: null,
    setting: null,
    profile: null,
  });

  const isContactOpen = Boolean(anchorEl.contacts);
  /*   const isSettingsOpen = Boolean(anchorEl);
  const isProfileOpen = Boolean(anchorEl); */

  const openContacts = (event) => {
    setAnchorEl({
      contacts: event.currentTarget,
    });
  };
  /* const openSettings = (event) => {
    setAnchorElSetting(event.currentTarget);
  };
  const openProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  }; */
  const handleClose = () => {
    setAnchorEl({
      contacts: null,
      setting: null,
      profile: null,
    });
    /* setAnchorEl(null);
    setAnchorEl(null); */
  };

  const theme = useTheme();
  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const updateDebounce = debounce((text) => {
    setSearchText(text);
    getData(text);
    localStorageData(text);
  });

  const searchData = (e) => {
    updateDebounce(e.target.value);
  };
  const showSearches = () => {
    setIsFocus(true);
    getlocalData();
  };
  const hideSearches = () => {
    setIsFocus(false);
  };
  const getlocalData = () => {
    setLocalData(JSON.parse(localStorage.getItem("data")));
  };

  return (
    <AppBar position='fixed' open={open}>
      <Toolbar>
        {!open && <Box ml='-18px'></Box>}

        <FlexBetween ml='10px'>
          <FlexBox>
            <Tooltip enterDelay={1200} title='Open Menu'>
              <HoverIconButton
                onClick={handleDrawerOpen}
                edge='start'
                sx={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  width: "20px",
                  height: "20px",
                  fontSize: "small",
                  borderRadius: "10px",
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}>
                &gt;
              </HoverIconButton>
            </Tooltip>

            <Typography ml='-25px' variant='h6' noWrap component='div'>
              Dashboard
            </Typography>
          </FlexBox>
          <Box display='flex' alignItems='center'>
            <FormControl
              size='small'
              sx={{ display: "flex", alignItems: "center" }}
              variant='filled'>
              <InputBox
                placeholder='Search...'
                onChange={searchData}
                onFocus={showSearches}
                onBlur={hideSearches}
                endAdornment={<CiSearch />}
              />
              {isFocus && localData && (
                <Box
                  width='133px'
                  padding='5px'
                  border='1px solid #b8b8b8'
                  bgcolor='#f0f0f0'
                  position='absolute'
                  mt='38px'>
                  {localData.map((item, key) => {
                    return <Typography key={key}>{item}</Typography>;
                  })}
                </Box>
              )}
            </FormControl>
            <FlexBox>
              <Tooltip title='Light/Dark Mode'>
                <HoverIconButton onClick={changeMode}>
                  {isDarkMode ? <CiLight /> : <MdOutlineDarkMode />}
                </HoverIconButton>
              </Tooltip>
              <Box>
                <Tooltip title='Contacts'>
                  <HoverIconButton
                    onClick={openContacts}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? "true" : undefined}>
                    <FaUserGroup />
                  </HoverIconButton>
                </Tooltip>
              </Box>
              <Box>
                <Tooltip title='Setting'>
                  <HoverIconButton
                    /* onClick={openSettings} */
                    sx={{
                      animation: "spin 7s linear infinite",
                      "@keyframes spin": {
                        "0%": {
                          transform: "rotate(0deg)",
                        },
                        "100%": {
                          transform: "rotate(360deg)",
                        },
                      },
                    }}>
                    <IoSettings />
                  </HoverIconButton>
                </Tooltip>
              </Box>

              <Box height='40px'>
                <Tooltip title='User'>
                  <HoverIconButton size='small' /*  onClick={openProfile} */>
                    <Avatar sx={{ height: 30, width: 30, fontSize: "0.9rem" }}>
                      U
                    </Avatar>
                  </HoverIconButton>
                </Tooltip>
              </Box>
            </FlexBox>
          </Box>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
