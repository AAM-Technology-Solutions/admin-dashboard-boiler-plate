import { Box, Grid, Typography } from "@mui/material";
// import { T } from "libs/localisations/T";
type props = {
  message?: string;
  routing?: boolean;
  routeUrl?: any;
  secondaryMessage?: string;
};
export const EmptyDataTable = ({ message, secondaryMessage }: props): JSX.Element => {
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
            {message ?? ("empy")}
          </Typography>
          <Typography variant="body1">
            {secondaryMessage ?? ("no-records-are-available-at-this-time")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
