import { AppBar, Toolbar, Badge, IconButton, Grid, Menu, MenuItem, Box } from "@mui/material";
import { KeyboardArrowDown, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";
// import { useTranslation } from "react-i18next";
// import { languages } from "libs/localisations/model/language";
import AccountMenu from "./account-menu";
// import LanguageSelector from "./language-selector";

export const APPBAR_HEIGHT = 65;

function ShellAppbar(): JSX.Element {
 
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: 1,
        zIndex: (theme) => theme.zIndex.drawer + 4,
        height: APPBAR_HEIGHT,
      }}
    >
      <Toolbar>
        <Grid container style={{ alignItems: "center" }}>
          <Grid item>
            <div>
              <Link to={"/"}>
                <img src="/assets/geberemartlogoappbar.svg" alt="Gebere Mart Logo" width={"200px"} />
              </Link>
            </div>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
          {/* <LanguageSelector/> */}
            <IconButton>
              <Badge color="error" badgeContent={1} max={9}>
                <Notifications sx={{ fontSize: 24 }} />
              </Badge>
            </IconButton>
            <span>
              <AccountMenu />
            </span>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default ShellAppbar;
