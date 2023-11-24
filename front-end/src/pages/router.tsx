import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../routes.js";
import { RouteProps } from "../../routes.js";

const Router = () => {
  const pageRoutes = AppRoutes.map(({ path, title, element }: RouteProps) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
