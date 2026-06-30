import { useLocation } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import ToastViewport from "./components/toasts/ToastViewport";
import Navbar from "./components/Navbar";
import GameplayNavbar from "./components/GameplayNavbar";
import AppRoutes from "./routes/AppRoutes";

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
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;