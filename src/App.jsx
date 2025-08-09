import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageIndex from './components/HomePageIndex';
import AboutPage from './components/AboutPage';
import RacersPage from './components/RacersPage';

import '../public/styles/index.css';
import './App.css';

function App() {
  return (
    <Router basename="/react-f1-practice">
      <Routes>
        <Route path="/" element={<HomePageIndex />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/racers" element={<RacersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
