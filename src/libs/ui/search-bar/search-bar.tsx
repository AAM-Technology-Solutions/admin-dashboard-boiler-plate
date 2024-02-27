import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { Box} from "@mui/material";

export default function SearchBar(props:{search?:any}): JSX.Element {
  return (
    <Box display="flex" width="100%" gap={2}>
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ display: "flex" }} elevation={0} variant="outlined">
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flexGrow: "1" }}          
           onKeyUp={(event: any) =>props?.search(event.target.value)} 
          placeholder="Search..." />
        </Box>
      </Paper>
    </Box>
  </Box>
  
  
  );
}
