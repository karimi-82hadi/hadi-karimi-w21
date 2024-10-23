import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ToastContainer rtl={true} autoClose={2000} pauseOnFocusLoss={false} />
    </BrowserRouter>
  );
}

export default App;
