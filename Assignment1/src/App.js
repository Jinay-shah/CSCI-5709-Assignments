import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/homePage';
import SearchPage from './Components/searchPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
