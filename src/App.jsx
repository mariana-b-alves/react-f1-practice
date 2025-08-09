import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageIndex from './components/HomePageIndex';
import AboutPage from './components/AboutPage';
import RacersPage from './components/RacersPage';

import '../public/styles/index.css'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-f1-practice/" element={<HomePageIndex />} />
        <Route path="/react-f1-practice/about" element={<AboutPage />} />
        <Route path="/react-f1-practice/racers" element={<RacersPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
