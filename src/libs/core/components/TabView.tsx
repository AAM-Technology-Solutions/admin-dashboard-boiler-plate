import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { ReactNode, useState, useEffect } from "react";

export interface TabContent {
  label: ReactNode;
  icon?: JSX.Element;
  body: ReactNode;
}

export interface TabViewProps {
  tabs: TabContent[];
  header?: ReactNode;
  selectedIndex?: number;
  onIndexChange?: (index: number) => void;
  isDisabled?: (index: number) => boolean;
}

export const TabView = (props: TabViewProps): JSX.Element => {
  const [value, setValue] = useState(props.selectedIndex?.toString() ?? "0");

  useEffect(() => {
    if (props.selectedIndex !== undefined) {
      setValue(props.selectedIndex.toString());
    }
  }, [props.selectedIndex]);

  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    if (props.onIndexChange) {
      props.onIndexChange(parseInt(newValue));
    } else {
      setValue(newValue);
    }
  };

  return (
    <TabContext value={value}>
      <Box sx={{ width: "100%", mt: 0, borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange}>
          {props.tabs.map((tab, index) => (
            <Tab
              key={`tab-${index}`}
              value={`${index.toString()}`}
              icon={tab.icon}
              iconPosition="start"
              label={tab.label}
              disabled={props.isDisabled?.(index) ?? false}
            />
          ))}
        </TabList>
      </Box>
      {props.header && <Box sx={{ my: 2 }}>{props.header}</Box>}
      <div>
        {props.tabs.map((tab, index) => (
          <div
            key={`tab-panel-${index}`}
            style={{ width: "100%", display: value === index.toString() ? "block" : "none", padding: 0 }}
          >
            {tab.body}
          </div>
        ))}
      </div>
    </TabContext>
  );
};
