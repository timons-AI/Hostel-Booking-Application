import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import SimpleMenu from "../layouts/SimpleMenu";
import TopMenu from "../layouts/TopMenu";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Listings from "../pages/Listings";
import ListingsCreate from "../pages/ListingsCreate";
import UsersCreate from "../pages/UsersCreate";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/listings",
          element: <Listings />,
        },
        {
          path: "/listings/create",
          element: <ListingsCreate />,
        },
        {
          path: "/users/create",
          element: <UsersCreate />,
        },
        {
          path: "/",
          element: <Page1 />,
        },
        {
          path: "page-2",
          element: <Page2 />,
        },
      ],
    },
    {
      path: "/simple-menu",
      element: <SimpleMenu />,
      children: [
        // {
        //   path: "/dashboard",
        //   element: <Dashboard />,
        // },
        {
          path: "page-1",
          element: <Page1 />,
        },
        {
          path: "page-2",
          element: <Page2 />,
        },
      ],
    },
    {
      path: "/top-menu",
      element: <TopMenu />,
      children: [
        // {
        //   path: "/dashboard",
        //   element: <Dashboard />,
        // },
        {
          path: "page-1",
          element: <Page1 />,
        },

        {
          path: "page-2",
          element: <Page2 />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
