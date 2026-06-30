import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../config/routes";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {routeConfig.map((route) => {
        const Component = route.element;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Component />}
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;