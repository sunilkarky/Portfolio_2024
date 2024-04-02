import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css';
import AboutUs from "./pages/AboutUs";
import Works from "./components/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <AboutUs />
     <Works />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
