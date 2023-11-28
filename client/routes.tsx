import HomePage from "./src/pages/home";
import AboutPage from "./src/pages/about";
import ListingPage from "./src/pages/list";
import ListingDetailPage from "./src/pages/listingdetail";
import Login from "./src/pages/login";
import Register from "./src/pages/register";
import Dashboard from "./src/pages/dashboard";

export interface RouteProps {
  title: string;
  path: string;
  element: JSX.Element;
}

export const AppRoutes: RouteProps[] = [
  {
    title: "Home",
    path: "",
    element: <HomePage />,
  },
  {
    title: "About",
    path: "about",
    element: <AboutPage />,
  },
  {
    title: "List",
    path: "listings",
    element: <ListingPage />,
  },
  {
    title: "ListingDetail",
    path: "listings/:id",
    element: <ListingDetailPage />,
  },
  {
    title: "Login",
    path: "login",
    element: <Login />,
  },
  {
    title: "Register",
    path: "register",
    element: <Register />,
  },
  {
    title: "404",
    path: "*",
    element: <h1>404</h1>,
  },
  {
    title: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
];
