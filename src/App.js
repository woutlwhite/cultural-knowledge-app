import './App.scss';
import Home from './pages/Home';
import Country from './pages/Country';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:code" element={<Country />} />
        </Routes>
    </Router>
  );
}

export default App;
