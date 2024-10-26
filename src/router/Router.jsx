import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import AccountPage from "../pages/AccountPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import PageNotFound from "../pages/404";

import { getCookie } from "../utils/cookie";

function Router() {
  const pathname = useLocation(); // I defined it because I think it rerender component and navigation work after login.
  const token = getCookie("accToken");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/account" />} />
      <Route
        path="/account"
        element={token ? <AccountPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={token ? <Navigate to="/account" /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={token ? <Navigate to="/account" /> : <SignupPage />}
      />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
