import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Divider, ListItemIcon, ListItemText, MenuList, Typography } from "@mui/material";
import { AccountCircle, Logout } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import useTranslate from "libs/localisations/custom-translation";
import { useAuth } from "../../../auth";
import { appEndpoint } from "../../../../store/app.endpoint";
// import Avatar from "../../../core/components/avatar";

export default function AccountMenu(): JSX.Element {
  /* component states */
  // const T= useTranslate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  /* custom variables */
  const open = Boolean(anchorEl);

  /* hooks */
  const { session, logOut } = useAuth();
  const navigate = useNavigate();
  const handleProfile = ():void=> {
    navigate(`/user-management/users/detail/${session?.userInfo?.Id as string}`, {
      state: { user: { ...session?.userInfo, userName: session?.userInfo?.UserName } },
    });
  };

  /* event handlers */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleLogOut = (): void => {
    // polling.stopPolling();
    void axios.delete(`${appEndpoint.logout}?access_token= ${session?.accessToken as string}` );
    logOut();
  };

  return (
    <span style={{ marginLeft: "13px" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        style={{ color: "grey" }}
        onClick={handleClick}
      >
        {session?.userInfo?.employeeInfo?.PhotoFileId?(<>
          {/* <Avatar
              imageId={session?.userInfo?.employeeInfo?.PhotoFileId}
              alt={session?.userInfo?.FullName}
              sx={{ width: "36px", height: "36px" }}
            />  */}
        </>):(<>
          <AccountCircle sx={{ fontSize: 40, color: "rgba(0, 0, 0, .3)" }} />

        </>)}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: "15px",
          }}
        >
          <Typography variant="body1" sx={{ textTransform: "capitalize" }} color="text.primary">
            {session?.userInfo.FullName}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textTransform: "capitalize" }}
            color="text.secondary"
            marginTop="-4px"
          >
            {session?.userInfo?.UserName}
          </Typography>
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList sx={{ minWidth: "200px" }}>
          <MenuItem>
            <ListItemText
              primary={session?.userInfo.FullName}
              secondary={session?.userInfo?.UserName}
            />
          </MenuItem>
          <Divider />
        
          <MenuItem onClick={handleProfile}>
            <ListItemIcon style={{ marginRight: "0px" }}>
              <AccountCircle fontSize="small" />
            </ListItemIcon>
            <ListItemText>{"Profile"}</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogOut}>
            <ListItemIcon style={{ marginRight: "0px" }}>
              <Logout />
            </ListItemIcon>
            <ListItemText>{"Logout"}</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </span>
  );
}
