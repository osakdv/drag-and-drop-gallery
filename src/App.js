import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
  <div className="App">
    {/* Navbar */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      {/* Define other routes here */}
    </Routes>
  </div>
</Router>
  );
}

export default App;
