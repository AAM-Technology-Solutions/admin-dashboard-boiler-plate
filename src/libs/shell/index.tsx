import React from "react";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Sidebar, { drawerWidth } from "./components/sidebar";

import ShellAppbar from "./components/appbar";
import { LoadingPage } from "../core";

const Shell = (): JSX.Element => {
  
  const session = localStorage.getItem("session");
  const accessToken = session && JSON.parse(session).accessToken;
  if (accessToken) {
    // polling.startPolling(accessToken); // ! you can uncomment this line to start polling
  }

  return (
    <>
      <ShellAppbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }} className={"bg-secondary"}>
        <Toolbar />
        <div
          style={{
            minHeight: "90vh",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            marginLeft: drawerWidth,
          }}
        >
          <Suspense fallback={<LoadingPage />}>
            <Outlet />
          </Suspense>
        </div>
      </Box>
    </>
  );
};

export default Shell;
