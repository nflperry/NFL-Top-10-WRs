
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NFLPlayerRanking from "./pages/Index";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<NFLPlayerRanking />} />
      <Route path="/preseason-challenge" element={<NFLPlayerRanking />} />
      <Route path="/weekly-challenge" element={<NFLPlayerRanking />} />
      <Route path="/templates" element={<NFLPlayerRanking />} />
    </Routes>
  </Router>
);

export default App;
