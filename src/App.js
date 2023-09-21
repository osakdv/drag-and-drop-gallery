import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";

function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Define other routes here */}
          </Routes>
        </div>
      </DndProvider>
    </Router>
  );
}

export default App;
