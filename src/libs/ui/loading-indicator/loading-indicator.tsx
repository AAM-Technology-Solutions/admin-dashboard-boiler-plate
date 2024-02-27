import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface LoadingUi {
  size: number;
}

export function LoadingUi(props: LoadingUi): JSX.Element {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 2 }}>
      <CircularProgress color="primary" size={props.size} />
    </Box>
  );
}
