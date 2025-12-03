import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";   // ✔️ Correcto
import Home from "./pages/Home";
import Publico from "./pages/Publico";
import PersonalSalud from "./pages/PersonalSalud";
import Bibliografia from "./pages/Bibliografia";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publico" element={<Publico />} />
        <Route path="/personal-salud" element={<PersonalSalud />} />
        <Route path="/bibliografia" element={<Bibliografia />} />
      </Routes>
    </Router>
  );
}

export default App;
