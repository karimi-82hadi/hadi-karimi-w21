import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import PageNotFound from "../pages/404";

import { getCookie } from "../utils/cookie";

function Router() {
  const token = getCookie("accToken");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="account"
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
