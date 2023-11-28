import HomePage from "./src/pages/home";
import AboutPage from "./src/pages/about";
import ListingPage from "./src/pages/list";
import ListingDetailPage from "./src/pages/listingdetail";
import Login from "./src/pages/login";
import Register from "./src/pages/register";

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
];
