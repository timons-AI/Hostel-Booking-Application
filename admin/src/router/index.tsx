import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import SimpleMenu from "../layouts/SimpleMenu";
import TopMenu from "../layouts/TopMenu";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Dashboard from "../pages/Dashboard";

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
