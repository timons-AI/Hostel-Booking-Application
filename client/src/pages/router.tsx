import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../routes.tsx";
import { RouteProps } from "../../routes.tsx";

const Router = () => {
  const pageRoutes = AppRoutes.map(({ path, title, element }: RouteProps) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
