import { Box } from "@mui/material";

/* Compnent props */
type TabPanelProps = {
  index: number;
  value: number;
  children: React.ReactNode;
};

/* Component definition */
export const TabPanel = (props: TabPanelProps) => {
  return (
    <div role="tabpanel" hidden={props?.value !== props?.index}>
      {props?.value === props?.index && <Box>{props?.children}</Box>}
    </div>
  );
};
