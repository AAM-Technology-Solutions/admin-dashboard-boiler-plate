import React, { useEffect, useState } from "react";
import { Box, Tabs as MTabs, Tab as MTab } from "@mui/material";

import { TabPanel } from "./components/tab-panel";

/* Compnent props */
type TabsProps = {
  headers: Array<{ label: string; icon?: React.ReactNode }>;
  children: React.ReactNode[];
  seperator?: React.ReactNode;
  index: number;
};

/* Component definition */
export const Tabs = (props: TabsProps) => {
  /* Component states */
  const [value, setValue] = useState(props?.index ? props?.index : 0);

  /* Event handlers */
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  /* useEffect hooks */
  useEffect(() => {
    if (props?.index) {
      setValue(props?.index);
    }
  }, [props?.index]);

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
        }}
      >
        <MTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {props?.headers?.map((item: any, index: number) => (
            <MTab key={index} label={item.label} iconPosition={"start"} icon={item?.icon} />
          ))}
        </MTabs>
      </Box>
      {props?.seperator && <>{props?.seperator}</>}
      {props?.children?.map((item: any, index: number) => (
        <TabPanel key={index} value={value} index={index}>
          {item}
        </TabPanel>
      ))}
    </>
  );
};
