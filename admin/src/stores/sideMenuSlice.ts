import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: "Layout",
      pathname: "/dashboard",
      title: "Dashboard ",
    },
    {
      icon: "Users",
      title: "Users",
      subMenu: [
        {
          icon: "User",
          pathname: "/users",
          title: "Users",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/users/create",
          title: "Create User",
          ignore: true,
        },
      ],
    },

    {
      icon: "Box",
      title: "Listings",
      subMenu: [
        {
          icon: "Building",
          pathname: "/listings",
          title: "Side Menu",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/listings/create",
          title: "Create Listing",
          ignore: true,
        },
      ],
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
