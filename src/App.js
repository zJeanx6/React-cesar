import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./pages/header.jsx";
import { History } from "./pages/History.jsx";
import { Family } from "./pages/Family.jsx";
import { Home } from "./pages/home.jsx";
import { Footer } from "./pages/footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-light bg-dark vh-100">
      <BrowserRouter>
        <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path="/Family" element={<Family />} />
          </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
