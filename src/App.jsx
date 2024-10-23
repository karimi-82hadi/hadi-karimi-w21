import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Router />
        <ToastContainer rtl={true} autoClose={2000} pauseOnFocusLoss={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
