import Navbar from "./components/navbar";
import Router from "./pages/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
    // <h1 className="text-3xl font-bold underline">Hello world!</h1>
  );
}

export default App;