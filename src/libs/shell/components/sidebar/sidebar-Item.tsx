import React, { useState } from "react";
import { ListItem, ListItemText, Collapse, Box } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import { Menu } from "../../model/menu";

export interface SidebarItemProps {
  menu: Menu;
  mergedPath: string;
  padding?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  menu,
  mergedPath,
  padding,
}: SidebarItemProps) => {
  /* hooks */
  const location = useLocation();
  const [open, setOpen] = useState(location.pathname.includes(menu.path));
  const { icon: Icon } = menu;
  const [paddingState] = useState(padding?? 0);

  return (
    <div>
      {menu.child && (
        <Box>
          <ListItem button onClick={() => setOpen(!open)} sx={{ py: 1, pl: padding }}>
            <Icon fontSize={"small"} style={{ marginRight: "5px" }} color={"action"} />
            <ListItemText primary={menu.name} /> {/* Translate the menu name */}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {menu.child.map((ch: any, index: number) => (
              <Box key={`${index}-${ch.name as string}`} component="div">
                <SidebarItem
                  key={`${index}-${ch.name as string}`}
                  menu={ch}
                  mergedPath={`${mergedPath}${menu.path}`}
                  padding={paddingState + 4}
                />
              </Box>
            ))}
          </Collapse>
        </Box>
      )}
      {!menu.child && (
        <Link
          to={`${mergedPath}${menu.path}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div
            className={
              (location.pathname.startsWith(`${mergedPath}${menu.path}`) &&
                `${mergedPath}${menu.path}` !== "/") ||
              location.pathname === `${mergedPath}${menu.path}`
                ? "active-menu"
                : ""
            }
          >
            <ListItem button key={menu.name} sx={{ py: 1, pl: padding }}>
              <Icon fontSize={"small"} style={{ marginRight: "5px" }} color={"action"} />
              <ListItemText>{menu.name}</ListItemText> {/* Translate the menu name */}
            </ListItem>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SidebarItem;
