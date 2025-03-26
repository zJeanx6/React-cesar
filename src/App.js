import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/header.jsx";
import History from "./pages/History.jsx";
import Family from "./pages/Family.jsx";
import Home from "./pages/home.jsx";
import Footer from "./pages/footer.jsx";


function App() {
  return (
   <div className="text-light bg-dark vh-100">
    <Header></Header>
    <History></History>
    <Family></Family>
    <Home></Home>
    <Footer></Footer>
   </div>
  );
}

export default App;
