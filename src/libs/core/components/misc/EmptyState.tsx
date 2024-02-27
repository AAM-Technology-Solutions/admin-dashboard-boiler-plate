import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export type EmptyStateProps = {
  title?: string;
  description?: string;
};

const EmptyState = ({ title, description }: EmptyStateProps): JSX.Element => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 5,
      }}
    >
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <img src="/assets/empty-box.svg" alt="Empty" />
        </Grid>
        <Grid item>
          <Typography variant="h4" fontWeight="500">
            {title ?? "Empty"}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmptyState;
