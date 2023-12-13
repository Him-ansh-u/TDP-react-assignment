import {
  HoverIconButton,
  FlexBetween,
  FlexBox,
  OnlineIndicator,
} from "./Components";
import {
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
  Typography,
  Box,
} from "@mui/material";

/* Icons */
import { IoCloseSharp } from "react-icons/io5";

export const MegaMenuContacts = (props) => {
  return (
    <Tooltip title='Contacts'>
      <Menu
        anchorEl={props.anchorEl}
        open={props.isContactOpen}
        onClose={props.handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            padding: "0px 10px 0px 10px",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

            "&:before": {
              content: '""',

              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <FlexBetween>
          <FlexBox padding='4px' fontWeight='bold'>
            Contacts <Typography> &#x28;{props.people.length}&#x29;</Typography>
          </FlexBox>

          <HoverIconButton size='small' onClick={props.handleClose}>
            <IoCloseSharp />
          </HoverIconButton>
        </FlexBetween>
        <Box sx={{ height: "200px", overflow: "auto" }}>
          {props.people.map((item, key) => {
            return (
              <MenuItem
                key={key}
                sx={{
                  display: "flex",
                  padding: "0px 5px 0px 5px",
                  height: "60px",
                }}>
                <OnlineIndicator
                  overlap='circular'
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant='dot'
                  sx={{
                    "& .MuiBadge-badge": {
                      color: !item.online && "transparent",
                      backgroundColor: !item.online && "#fff",
                      border: !item.online && "2px solid #bdbdbd",
                    },
                  }}>
                  <Avatar />
                </OnlineIndicator>

                <Box ml='5px'>
                  <Typography>{item.name}</Typography>
                  <Typography color='#BDBDBD' fontSize='small'>
                    {item.phone}
                  </Typography>
                </Box>
              </MenuItem>
            );
          })}
        </Box>
      </Menu>
    </Tooltip>
  );
};

/* export const MegaMenuProfile = (props) => {
  return (
    <Tooltip title='Profile'>
      <Menu
        anchorEl={props.anchorEl}
        open={props.IsProfileOpen}
        onClose={props.handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",

            padding: "0px 10px 0px 10px",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

            "&:before": {
              content: '""',

              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <FlexBetween>
          <Box display='flex' padding='4px' fontWeight='bold'>
            Profile
          </Box>

          <HoverIconButton size='small' onClick={props.handleClose}>
            <IoCloseSharp />
          </HoverIconButton>
        </FlexBetween>
        <Box sx={{ height: "200px", overflow: "auto" }}></Box>
      </Menu>
    </Tooltip>
  );
};

export const MegaMenuSettings = (props) => {
  return (
    <Tooltip title='Profile'>
      <Menu
        anchorEl={props.anchorEl}
        open={props.IsSettingsOpen}
        onClose={props.handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",

            padding: "0px 10px 0px 10px",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

            "&:before": {
              content: '""',

              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <FlexBetween>
          <Box display='flex' padding='4px' fontWeight='bold'>
            Profile
          </Box>

          <HoverIconButton size='small' onClick={props.handleClose}>
            <IoCloseSharp />
          </HoverIconButton>
        </FlexBetween>
        <Box sx={{ height: "200px", overflow: "auto" }}></Box>
      </Menu>
    </Tooltip>
  );
};
 */
