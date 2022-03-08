import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SimpleCalculator from "./simpleCalculator/SimpleCalculator";
import BinaryCalculator from "./binaryCalculator/BinaryCalculator";
import ScientificCalculator from "./scientificCalculator/ScientificCalculator";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple-calculator" element={<SimpleCalculator />} />
        <Route path="/binary-calculator" element={<BinaryCalculator />} />
        <Route path="/sci-calculator" element={<ScientificCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
