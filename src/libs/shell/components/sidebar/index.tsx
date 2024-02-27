import React, { useEffect, useMemo, useState } from "react";
import { Box, Drawer, List } from "@mui/material";
import styled from "@emotion/styled";
import { menus } from "../../data/menus";
import { filterMenusByPermissions, Menu } from "../../model/menu";
import { useAuth } from "../../../auth";
import { APPBAR_HEIGHT } from "../appbar";
import SidebarItem from "./sidebar-Item";
import SearchInput from "../../../core/components/input-fields/SearchInput";

export const drawerWidth = 300;

const Sidebar = (): JSX.Element => {
  const { session } = useAuth();

  const [visibleMenu, setVisibleMenu] = useState<Menu[]>([]);

  const permittedMenu = useMemo(() => {
    const userPermissions =
      session?.userInfo?.Roles?.flatMap((role) => role?.Permissions ?? []).map(
        (permission) => permission.PermissionKey,
      ) ?? [];

    return filterMenusByPermissions(menus, userPermissions);
  }, [session?.userInfo?.Roles]);

  useEffect(() => {
    setVisibleMenu(permittedMenu);
  }, [permittedMenu]);

  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      boxSizing: "border-box",
      marginTop: APPBAR_HEIGHT + 12,
      borderTopRightRadius: 12,
      height: "90%", 
    },
  }));

  return (
    <StyledDrawer variant="permanent">
      <Box sx={{ overflow: "auto" }}>
        <SearchInput searchBy="name" data={permittedMenu} setDisplayedMenus={setVisibleMenu} />
        <List dense={true} sx={{overflow:"auto"}} >
          {visibleMenu.map((menuItem, index) => (
            <SidebarItem key={`${index}-${menuItem.name}`} menu={menuItem} mergedPath={""} />
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;
