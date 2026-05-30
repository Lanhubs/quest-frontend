import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import ToastViewport from "./components/toasts/ToastViewport";
import Navbar from "./components/Navbar";
import GameplayNavbar from "./components/GameplayNavbar";
import { routeConfig } from "./config/routes";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isSignInPage = currentPath === "/sign-in";
  const isHomePage = currentPath === "/";

  return (
    <>
      {/* Navigation Layout dynamically matched from path hooks */}
      {!isSignInPage && (isHomePage ? <GameplayNavbar /> : <Navbar />)}

      <ToastViewport />

      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center text-white">
            Loading...
          </div>
        }
      >
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
          {/* Static Core Route */}
          <Route path="/" element={<Home />} />

          {/* Dynamic Lazy-Loaded Configurations with Type Guarding */}
          {routeConfig
            .filter((route) => route.isLazy && "component" in route)
            .map((route) => {
              const routeWithComponent = route as Extract<
                (typeof routeConfig)[number],
                { component: any }
              >;
              const LazyComponent = routeWithComponent.component;

              return (
                <Route
                  key={routeWithComponent.path}
                  path={routeWithComponent.path}
                  element={<LazyComponent />}
                />
              );
            })}

          {/* CRITICAL FIX: The native universal catch-all route.
            React Router will automatically hit this whenever 'currentPath' 
            fails to match any route listed above.
          */}
          <Route path="*" element={<NotFound />} />
           {routeConfig
            .filter((route) => route.isLazy && route.component)
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))} 
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;