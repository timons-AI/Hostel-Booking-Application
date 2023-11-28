import Navbar from "./components/navbar";
import Router from "./pages/router";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Router />
    </BrowserRouter>
    // <h1 className="text-3xl font-bold underline">Hello world!</h1>
  );
}

export default App;
