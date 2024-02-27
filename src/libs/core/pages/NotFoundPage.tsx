import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Box display="flex" flexGrow={1} alignItems="center" justifyContent="center">
      <Box
        maxWidth="400px"
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <img src="/assets/page_not_found_icon.svg" width="150px" alt="page not found" />
        <Typography variant="h3">Page Not Found!</Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          Sorry, the page you requested could not be found, please go back to the homepage
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{ marginX: 4 }}
          onClick={() => {
            navigate("/");
          }}
        >
          GO HOME
        </Button>
      </Box>
    </Box>
  );
};
