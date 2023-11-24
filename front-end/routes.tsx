import HomePage from "./src/pages/home";
import AboutPage from "./src/pages/about";

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
];
