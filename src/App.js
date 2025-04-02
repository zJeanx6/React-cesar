import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./pages/header.jsx";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/home.jsx";
import { Projects } from "./pages/projects.jsx";
import { Footer } from "./pages/footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-dark vh-100% text-white">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
