import React, { useState, useEffect, useRef } from "react";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Menu } from "../../../shell/model/menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.08),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

interface SearchInputProps {
  searchBy: string;
  data: any[];
  setDisplayedMenus: (menus: Menu[]) => void;
}

const SearchInput = ({ searchBy, data, setDisplayedMenus }: SearchInputProps) => {
  /* Component states */
  const [search, setSearch] = useState("");
  const fullPath = useRef("");

  /* custome variables */
  const searchableData: string[] = [];
  const leafMenus: Menu[] = [];
  const flatMenus: Menu[] = [];

  /* utils */
  function flattenMenus(menus: Menu[]) {
    Array.from(menus).forEach((item: Menu) => {
      if (item.child) {
        flatMenus.push(item);
        flattenMenus(item.child);
      } else {
        flatMenus.push(item);
      }
    });
  }

  function getAllLeafMenu(value: Menu[]) {
    Array.from(value).forEach((item: any) => {
      if (item.child) {
        getAllLeafMenu(item.child);
      } else {
        leafMenus.push(item);
      }
    });
  }

  function getSearchableKeys(key: string, value: Menu[]) {
    Array.from(value).forEach((item: any) => {
      if (item.child) {
        searchableData.push(item[key]);
        getSearchableKeys(key, item.child);
      } else {
        searchableData.push(item[key]);
      }
    });
  }

  function getFullPath(menu: Menu, flatMenus: Menu[]) {
    let parent: Menu | undefined;
    for (let i = 0; i < flatMenus.length; i++) {
      if (flatMenus[i]?.child) {
        for (let j = 0; j < flatMenus[i].child!.length; j++) {
          if (flatMenus[i].child![j]?.name === menu?.name) {
            parent = flatMenus[i];
            break;
          }
        }
      }
      if (parent) {
        break;
      }
    }

    fullPath.current = menu.path + fullPath.current;
    if (parent) {
      getFullPath(parent, flatMenus);
    }
  }

  flattenMenus(data);
  getAllLeafMenu(data);
  getSearchableKeys(searchBy, leafMenus);

  /* event handlers */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  /* useEffect hooks */
  useEffect(() => {
    fullPath.current = "";
    if (search === "") {
      setDisplayedMenus(data);
    } else {
      const result = leafMenus.filter((menu: Menu) =>
        menu.name.toLowerCase().startsWith(search.toLowerCase()),
      );

      const pathAdjustedMenus = result.map((menu: Menu) => {
        fullPath.current = "";
        getFullPath(menu, flatMenus);
        menu.path = fullPath.current;
        const newMenu: Menu = { ...menu };
        newMenu.path = fullPath.current;
        return newMenu;
      });
      setDisplayedMenus(pathAdjustedMenus);
    }
  }, [search]);

  return (
    <Box sx={{ marginTop: 2, marginBottom: 2, marginRight: 2 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon color="disabled" />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={handleChange}
          value={search}
          placeholder="Search"
          inputProps={{ "aria-label": "search", name: "q" }}
          fullWidth
        />
      </Search>
    </Box>
  );
};

export default SearchInput;
